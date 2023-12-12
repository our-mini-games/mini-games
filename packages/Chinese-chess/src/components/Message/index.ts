import { defineAsyncComponent, render, createVNode } from 'vue'
interface Options {
  type: 'confirm' | 'message'
  content: string
  onConfirm?: () => void
  onCancel?: () => void
}

// eslint-disable-next-line @typescript-eslint/promise-function-async
const component = defineAsyncComponent(() => import('./Modal.vue'))

const vNode = createVNode(component)

const install = (): void => {
  const div = document.createElement('div')
  render(vNode, div)

  document.body.appendChild(div.childNodes[0])
}

const open = (options: Options): void => {
  const event = new CustomEvent('confirm:open', {
    detail: options
  })
  document.dispatchEvent(event)
}

export default {
  install,
  open
}
