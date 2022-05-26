import assert from 'assert';

export function autoHeight(node: HTMLElement) {
  const parentNode = node.parentElement!;
  let height = 0;
  for (let i = 0; i < parentNode.children.length; i++) {
    if (parentNode.children[i] === node) {
      continue;
    }
    height += parentNode.children[i].clientHeight;
  }
  node.style.height = 'calc( 100% - ' + height + 'px )';
}

export function autoWidth(node: HTMLElement) {
  const parentNode = node.parentElement!;
  let width = 0;
  for (let i = 0; i < parentNode.children.length; i++) {
    if (parentNode.children[i] === node) {
      continue;
    }
    width += parentNode.children[i].clientWidth;
  }
  node.style.width = 'calc( 100% - ' + width + 'px )';
}
