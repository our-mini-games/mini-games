export interface EventCallback {
  (...args: any[]): any
  listen?: () => any
}

export interface EventWrapper {
  [key: string]: (EventCallback)[]
}

class EventEmitter {
  static defaultMaxListener: number = 10

  protected _maxListeners: number | undefined
  private _events: EventWrapper

  constructor () {
    this._events = Object.create(null)
  }

  get events (): EventWrapper {
    return this._events
  }

  get eventNames (): string[] {
    return Object.keys(this._events)
  }

  /**
   * 获取最大监听数
   */
  get maxListener (): number {
    return this._maxListeners
      ? this._maxListeners
      : EventEmitter.defaultMaxListener
  }

  /**
   * 设置最大监听数
   * @param { number } num - 监听数
   */
  set maxListener (num: number) {
    this._maxListeners = num
  }

  /**
   * 监听事件
   * @param { string } type - 事件监听类型
   * @param { EventCallback } cb - 回调函数
   */
  on (type: string, cb: EventCallback): void {
    if (this._events[type]) {
      // 监听的事件不能超过设置的最大监听数
      if (this._events[type].length >= this.maxListener) {
        console.warn('监听的事件不能超过设置的最大监听数。')
      } else {
        this._events[type].push(cb)
      }
    } else {
      this._events[type] = [cb]
    }
  }

  /**
   * 只监听一次事件
   * @param { string } type - 事件监听类型
   * @param { EventCallback } cb - 回调函数
   */
  once (type: string, cb: (...args: any[]) => any): void {
    const wrap = (...args: any[]): void => {
      // eslint-disable-next-line n/no-callback-literal
      cb(...args)
      // 当回调函数被调用之后，立即解除监听
      this.off(type, wrap)
    }

    // 自定义属性
    wrap.listen = cb
    this.on(type, wrap)
  }

  /**
   * 发布事件
   * @param { string } type - 事件类型
   * @param { any[] } args - 传递的参数集合
   */
  emit (type: string, ...args: any[]): void {
    if (this._events[type]) {
      this._events[type].forEach((listener) => {
        listener.call(this, ...args)
      })
    }
  }

  /**
   * 移除事件监听
   * @param { string } type - 事件监听类型
   * @param { EventCallback } cb - 回调函数
   */
  off (type: string, cb: EventCallback): void {
    if (this._events[type]) {
      // 移除相关的监听器
      this._events[type] = this._events[type].filter((listener) => {
        return cb !== listener && cb !== listener.listen
      })
    }
  }

  /**
   * 移除所有监听
   */
  clear (): void {
    this._events = Object.create(null)
  }
}

export default EventEmitter
