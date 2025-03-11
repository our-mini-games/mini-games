import * as THREE from 'three'
import Cannon from 'cannon'
import Box from './Box'
import Layout from './Layout'

export interface ArkanoidOptions {
  el: string | HTMLElement
  width: number
  height: number
  cx: number
  cy: number
  cz: number
}

export type ArkanoidStatus = 'default' | 'playing' | 'paused' | 'over' | 'win'

export default class Arkanoid {
  opts: ArkanoidOptions = {
    el: document.body,
    width: 24,
    height: 32,
    cx: 0,
    cy: 0,
    cz: 0
  }

  boxCtor: Box

  wall: THREE.Mesh[] = []
  items: THREE.Mesh[] = []
  baffle: THREE.Mesh | null = null
  ball: THREE.Mesh | null = null

  world = new Cannon.World()
  ballBody: Cannon.Body | null = null
  itemsBody: Cannon.Body[] = []
  baffleBody: Cannon.Body | null = null
  wallBody: Cannon.Body[] = []

  ballMaterial = new Cannon.Material('ball')
  itemMaterial = new Cannon.Material('item')
  wallMaterial = new Cannon.Material('wall')
  baffleMaterial = new Cannon.Material('baffle')

  toBeRemoveItem: [number, Cannon.Body?] = [-1, undefined]

  #status: ArkanoidStatus = 'default'
  #lastVelocity: THREE.Vector3 = new THREE.Vector3(10, 0, -10)

  constructor (public layout: Layout, options: Partial<ArkanoidOptions> = {}) {
    this.opts = { ...this.opts, ...options }

    this.world.gravity.set(0, 0, 0) // 无重力
    this.boxCtor = new Box(this.layout.scene, this.world)

    this.init()
    this.initEvent()

    this.layout.renderer.setAnimationLoop(this.animate.bind(this))
  }

  get status (): ArkanoidStatus {
    return this.#status
  }

  set status (status: ArkanoidStatus) {
    this.#status = status
    ;(window as any)._emit('status', status)
    switch (status) {
      case 'playing':
        this.run()
        break
      case 'paused':
        this.stop()
        break
      case 'over':
        this.stop()
        break
      case 'default':
      default:
        this.stop()
        break
    }
  }

  init (): void {
    this.createWall()
    this.createBall()
    this.createBaffle()
    this.createItems()

    this.contactMaterial()
  }

  initEvent (): void {
    this.handlePostStep = this.handlePostStep.bind(this)
    this.world.addEventListener('postStep', this.handlePostStep)
  }

  handlePostStep (): void {
    this.world.contacts.forEach((contact) => {
      const bodyA = contact.bi // 接触的第一个刚体
      const bodyB = contact.bj // 接触的第二个刚体

      let idx = this.getContactItemIndex(bodyA, bodyB)
      idx = idx === -1 ? this.getContactItemIndex(bodyB, bodyA) : idx
      if (idx !== -1) {
        const itemBody = this.ballBody === bodyA ? bodyB : bodyA
        this.toBeRemoveItem = [idx, itemBody]
      }
    })
  }

  getContactItemIndex (bodyA: Cannon.Body, bodyB: Cannon.Body): number {
    if (bodyA !== this.ballBody) return -1

    const idx = this.itemsBody.findIndex(item => item === bodyB)
    return idx
  }

  // 接触材质
  contactMaterial (): void {
    const {
      world,
      ballMaterial,
      itemMaterial,
      wallMaterial,
      baffleMaterial
    } = this

    world.addContactMaterial(new Cannon.ContactMaterial(ballMaterial, itemMaterial, {
      friction: 0,
      restitution: 1 // 完全弹性碰撞
    }))

    world.addContactMaterial(new Cannon.ContactMaterial(ballMaterial, wallMaterial, {
      friction: 0,
      restitution: 1
    }))

    world.addContactMaterial(new Cannon.ContactMaterial(ballMaterial, baffleMaterial, {
      friction: 0,
      restitution: 1
    }))

    this.ballBody!.material = ballMaterial
    this.itemsBody.forEach(body => {
      body.material = itemMaterial
    })
    this.wallBody.forEach(body => {
      body.material = wallMaterial
    })
    this.baffleBody!.material = baffleMaterial
  }

  start (): void {
    this.status = 'playing'
  }

  pause (): void {
    this.status = 'paused'
  }

  run (): void {
    this.ballBody!.velocity.set(this.#lastVelocity.x, this.#lastVelocity.y, this.#lastVelocity.z)
  }

  stop (): void {
    this.#lastVelocity.set(this.ballBody!.velocity.x, this.ballBody!.velocity.y, this.ballBody!.velocity.z)
    this.ballBody!.velocity.set(0, 0, 0)
  }

  restart (): void {
    this.stop()

    this.items.forEach(item => {
      this.layout.scene.remove(item)
    })
    this.itemsBody.forEach(body => {
      this.world.remove(body)
    })
    this.items.length = 0
    this.itemsBody.length = 0

    this.createItems()
    this.#lastVelocity = new THREE.Vector3(10, 0, -10)
    this.ball!.position.set(this.opts.cx - 0.5, 0, this.opts.cz + this.opts.height / 2 - 1)
    this.ballBody!.position.set(this.opts.cx - 0.5, 0, this.opts.cz + this.opts.height / 2 - 1)

    const itemMaterial = this.itemMaterial
    this.itemsBody.forEach(body => {
      body.material = itemMaterial
    })

    this.baffle!.position.x = 0
    this.baffleBody!.position.x = 0

    this.status = 'playing'
  }

  moveBaffle (dir: 'left' | 'right'): void {
    if (!this.baffleBody) return

    switch (dir) {
      case 'left':
        this.baffleBody.position.x = Math.max(-this.opts.width / 2 + 3, this.baffleBody.position.x - 1)
        break
      case 'right':
        this.baffleBody.position.x = Math.min(this.opts.width / 2 - 3, this.baffleBody.position.x + 1)
        break
      default:
        break
    }
  }

  // 同步物理到图形
  syncPhysicsToGraphics (): void {
    this.ball!.position.copy(this.ballBody!.position)
    this.baffle!.position.copy(this.baffleBody!.position)
    this.wall.forEach((wall, index) => {
      wall.position.copy(this.wallBody[index].position)
    })
    this.items.forEach((item, index) => {
      item.position.copy(this.itemsBody[index].position)
    })
  }

  // 同步数据
  removeItem (): void {
    if (this.toBeRemoveItem[0] !== -1 && this.toBeRemoveItem[1]) {
      this.layout.scene.remove(this.items[this.toBeRemoveItem[0]])
      this.items.splice(this.toBeRemoveItem[0], 1)
      this.itemsBody.splice(this.toBeRemoveItem[0], 1)
      this.world.remove(this.toBeRemoveItem[1])
      this.toBeRemoveItem = [-1, undefined]
    }
  }

  check (): void {
    // check is game over
    if (this.ball && this.ball.position.z > this.opts.height / 2) {
      this.status = 'over'
      return
    }

    if (this.items.length === 0) {
      this.status = 'win'
    }
  }

  animate (): void {
    // only required if controls.enableDamping = true, or if controls.autoRotate = true
    this.layout.controls.update()

    if (this.status === 'playing') {
      // 更新物理世界
      this.world.step(1 / 60) // 每秒60帧

      this.syncPhysicsToGraphics()
      this.removeItem()
      this.check()

      if (this.ball) {
        this.ball.rotation.x += 0.01
        this.ball.rotation.y += 0.01
        this.ball.rotation.z += 0.01
      }
    }

    this.render()
  }

  render (): void {
    this.layout.renderer.render(this.layout.scene, this.layout.camera)
  }

  createWall (): void {
    const { width, height, cx, cz } = this.opts

    const { mesh: topWall, body: topWallBody } = this.boxCtor.createBox({
      width,
      height: 1,
      depth: 1,
      position: new THREE.Vector3(cx, 0, cz - height / 2),
      materials: Box.createMaterials([
        'minecraft/grass_dirt.png',
        'minecraft/grass_dirt.png',
        'minecraft/grass.png',
        'minecraft/dirt.png',
        'minecraft/grass_dirt.png',
        'minecraft/grass_dirt.png'
      ], {
        wrapS: true,
        wrapT: true,
        repeat: {
          x: width,
          y: 1
        }
      })
    })

    const { mesh: leftWall, body: leftWallBody } = this.boxCtor.createBox({
      width: 1,
      height: 1,
      depth: height,
      position: new THREE.Vector3(cx - width / 2 + 0.5, 0, cz + 0.5),
      materials: Box.createMaterials([
        'minecraft/grass_dirt.png',
        'minecraft/grass_dirt.png',
        'minecraft/grass.png',
        'minecraft/dirt.png',
        'minecraft/grass_dirt.png',
        'minecraft/grass_dirt.png'
      ], {
        wrapS: true,
        wrapT: true,
        repeat: {
          x: 1,
          y: height
        }
      })
    })

    const { mesh: rightWall, body: rightWallBody } = this.boxCtor.createBox({
      width: 1,
      height: 1,
      depth: height,
      position: new THREE.Vector3(cx + width / 2 - 0.5, 0, cz + 0.5),
      materials: Box.createMaterials([
        'minecraft/grass_dirt.png',
        'minecraft/grass_dirt.png',
        'minecraft/grass.png',
        'minecraft/dirt.png',
        'minecraft/grass_dirt.png',
        'minecraft/grass_dirt.png'
      ], {
        wrapS: true,
        wrapT: true,
        repeat: {
          x: 1,
          y: height
        }
      })
    })

    this.wall.push(topWall, leftWall, rightWall)
    this.wallBody.push(topWallBody, leftWallBody, rightWallBody)
  }

  createBall (): void {
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(Box.resolvePath('sprite.png'))
      })
    )

    ball.position.set(this.opts.cx - 0.5, 0, this.opts.cz + this.opts.height / 2 - 1)
    this.layout.scene.add(ball)

    this.ball = ball

    this.ballBody = new Cannon.Body({
      mass: 1,
      position: new Cannon.Vec3(ball.position.x, ball.position.y, ball.position.z),
      shape: new Cannon.Sphere(0.5)
    })

    this.world.addBody(this.ballBody)
  }

  createBaffle (): void {
    const { height, cx, cz } = this.opts

    const materials = Box.createMaterials([
      'minecraft/grass_dirt.png',
      'minecraft/grass_dirt.png',
      'minecraft/grass.png',
      'minecraft/dirt.png',
      'minecraft/grass_dirt.png',
      'minecraft/grass_dirt.png'
    ], {
      wrapS: true,
      wrapT: true,
      repeat: {
        x: 4,
        y: 1
      }
    })
    const { mesh: baffle, body: baffleBody } = this.boxCtor.setOptions({
      width: 4,
      height: 1,
      depth: 1,
      position: new THREE.Vector3(cx, 0, cz + height / 2),
      materials
    }).createBox()

    this.baffle = baffle
    this.baffleBody = baffleBody
  }

  createItems (): void {
    const { width, height } = this.opts

    this.boxCtor.setOptions({
      width: 1,
      height: 1,
      depth: 1,
      position: new THREE.Vector3(0, 0, 0),
      materials: Box.createMaterial('crate.gif')
    })

    for (let z = 0; z < (height - 2) / 2; z++) {
      for (let x = 0; x < (width - 2); x++) {
        const { mesh, body } = this.boxCtor.createBox({
          position: new THREE.Vector3(x - width / 2 + 1.5, 0, z - height / 2 + 1)
        })
        this.items.push(mesh)
        this.itemsBody.push(body)
      }
    }
  }
}
