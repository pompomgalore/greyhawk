import type { VNode, VNodeArrayChildren } from 'vue'

export function getNodeText(node: VNode | VNodeArrayChildren[number]): string {
  if (typeof node === 'string') {
    return node
  }
  if (!node || typeof node !== 'object' || !('children' in node) || !node.children) {
    return ''
  }
  if (typeof node.children === 'string') {
    return node.children
  }
  if (Array.isArray(node.children)) {
    return getChildrenNodeText(node.children)
  }
  if (typeof node.children.default === 'function') {
    return getChildrenNodeText(node.children.default())
  }
  return ''
}

function getChildrenNodeText(children: Array<VNode> | VNodeArrayChildren): string {
  return children.map(getNodeText).join('')
}
