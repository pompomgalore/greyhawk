import type { VNode, VNodeArrayChildren } from 'vue'

export function getNodeText(node: VNode | VNodeArrayChildren[number] | Array<VNode>): string {
  if (typeof node === 'string') {
    return node
  }
  if (Array.isArray(node)) {
    return getNodesText(node)
  }
  if (!node || typeof node !== 'object' || !('children' in node) || !node.children) {
    return ''
  }
  if (typeof node.children === 'string') {
    return node.children
  }
  if (Array.isArray(node.children)) {
    return getNodesText(node.children)
  }
  if (typeof node.children.default === 'function') {
    const childrenNodes = node.children.default()
    return getNodesText(childrenNodes)
  }
  return ''
}

function getNodesText(children: Array<VNode> | VNodeArrayChildren): string {
  return children.map(getNodeText).join('\n')
}
