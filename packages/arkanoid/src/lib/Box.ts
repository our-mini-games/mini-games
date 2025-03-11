import * as THREE from 'three'
import Cannon from 'cannon'

export interface TextureOption {
  wrapS: boolean
  wrapT: boolean
  repeat: {
    x: number
    y: number
  }
}

export interface BoxOptions {
  width: number
  height: number
  depth: number
  position: THREE.Vector3
  /**
   * 物体材质
   */
  materials: THREE.Material | THREE.Material[]
  /**
   * 物体质量
   */
  mass: number
}

const defaultOpts: BoxOptions = {
  width: 1,
  height: 1,
  depth: 1,
  position: new THREE.Vector3(0, 0, 0),
  materials: new THREE.MeshStandardMaterial({ color: 0xff0000 }),
  mass: 0
}
export default class Box {
  opts: BoxOptions

  constructor (public scene: THREE.Scene, public world: Cannon.World, options: Partial<BoxOptions> = {}) {
    this.opts = {
      ...defaultOpts,
      ...options
    }
  }

  setOptions (options: Partial<BoxOptions> | false = false): Box {
    if (options === false) {
      this.opts = { ...defaultOpts }
    } else {
      this.opts = { ...this.opts, ...options }
    }

    return this
  }

  // createBoxes (startX: number, startZ: number, endX: number, endZ: number): THREE.Mesh[] {
  //   const direction = new THREE.Vector3(endX - startX, 0, endZ - startZ) // 方向
  //   const segments = Math.ceil(direction.length() / this.options.width) // 段数

  //   // 归一化方向向量
  //   direction.normalize()

  //   const boxes: THREE.Mesh[] = []

  //   for (let i = 0; i < segments; i++) {
  //     const position = new THREE.Vector3(
  //       startX + direction.x * i * this.options.width,
  //       // this.options.height / 2,
  //       0,
  //       startZ + direction.z * i * this.options.width
  //     )

  //     const box = this.createBox(this.options.width, this.options.height, this.options.length, position)
  //     boxes.push(box)
  //   }

  //   return boxes
  // }

  createBox ({
    width = this.opts.width,
    height = this.opts.height,
    depth = this.opts.depth,
    position = this.opts.position,
    mass = this.opts.mass,
    materials = this.opts.materials
  }: Partial<BoxOptions> = {}): { mesh: THREE.Mesh, body: Cannon.Body } {
    const boxSegment = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      materials
    )
    boxSegment.position.copy(position)
    this.scene.add(boxSegment)

    const body = new Cannon.Body({
      mass,
      shape: new Cannon.Box(new Cannon.Vec3(width / 2, height / 2, depth / 2)),
      position: new Cannon.Vec3(position.x, position.y, position.z)
    })

    this.world.addBody(body)

    return { mesh: boxSegment, body }
  }

  static loadTexture (texturePath: string, options: Partial<TextureOption> = {}): THREE.Texture {
    const texture = new THREE.TextureLoader().load(texturePath)
    if (options.wrapS) {
      texture.wrapS = THREE.RepeatWrapping
    }
    if (options.wrapT) {
      texture.wrapT = THREE.RepeatWrapping
    }
    if (options.repeat) {
      texture.repeat.set(options.repeat.x, options.repeat.y)
    }
    return texture
  }

  static createMaterial (texturePath: string, options?: TextureOption): THREE.Material {
    const texture = Box.loadTexture(Box.resolvePath(texturePath), options)
    return new THREE.MeshStandardMaterial({ map: texture })
  }

  static createMaterials (textures: string[], options?: TextureOption): THREE.Material[] {
    const mapper = new Map<string, THREE.Material>()
    return textures.map(texture => {
      if (mapper.has(texture)) {
        return mapper.get(texture)!
      }
      const material = Box.createMaterial(texture, options)
      mapper.set(texture, material)
      return material
    })
  }

  static resolvePath (path: string): string {
    const PATHNAME = import.meta.env.VITE_APP_PATHNAME as string
    return `${PATHNAME}textures/${path.startsWith('/') ? path.slice(1) : path}`
  }
}
