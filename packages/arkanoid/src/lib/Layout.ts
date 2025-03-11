import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export interface LayoutOptions {
  width: number
  height: number
}

class Layout {
  scene: THREE.Scene
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  controls: OrbitControls

  width: number
  height: number

  el: HTMLElement

  constructor (el: string | HTMLElement = document.body, options: Partial<LayoutOptions> = {}) {
    const elem = typeof el === 'string' ? document.querySelector<HTMLElement>(el) : el
    if (!elem || !('innerHTML' in elem)) {
      throw new Error('el must be a HTMLElement')
    }

    this.el = elem

    this.width = options.width ?? elem.offsetWidth
    this.height = options.height ?? elem.offsetHeight

    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.camera = new THREE.PerspectiveCamera(25, this.width / this.height, 1, 1000)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.init()

    this.mount()
  }

  init (): void {
    this.scene.background = new THREE.Color(0xcccccc)
    this.scene.fog = new THREE.FogExp2(0xcccccc, 0.002)
    // 添加网格
    // this.scene.add(new THREE.GridHelper(window.innerWidth, window.innerHeight))
    // 添加坐标轴
    // this.scene.add(new THREE.AxesHelper(50))

    this.#initCamera()

    this.#initRenderer()
    this.#initControls()
    this.#initLights()

    const observe = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === this.el) {
          this.onWindowResize(entry.contentRect.width, entry.contentRect.height)
        }
      }
    })
    observe.observe(this.el)
  }

  #initCamera (): void {
    const camera = this.camera
    camera.position.set(0, 0, 0)
    camera.lookAt(0, 0, 0)
  }

  #initRenderer (): void {
    const renderer = this.renderer
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(this.width, this.height)
  }

  #initControls (): void {
    const controls = this.controls
    // this.controls.listenToKeyEvents(window); // optional

    // this.controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05

    controls.screenSpacePanning = false

    controls.minDistance = 100
    controls.maxDistance = 500

    controls.maxPolarAngle = Math.PI / 2
  }

  #initLights (): void {
    const scene = this.scene

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // 添加点光源
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)
  }

  mount (): void {
    this.el.appendChild(this.renderer.domElement)
  }

  onWindowResize (width: number, height: number): void {
    this.width = width
    this.height = height

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(this.width, this.height)
  }
}

export default Layout
