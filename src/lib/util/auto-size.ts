export function autoHeight(node: HTMLElement) {
  const handleHeight = () => {
    const parentNode = node.parentElement!;
    if(!parentNode) {
      return;
    }
    let height = 0;
    for (let i = 0; i < parentNode.children.length; i++) {
      if (parentNode.children[i] === node) {
        continue;
      }
      height += parentNode.children[i].clientHeight;
    }
    node.style.height = 'calc( 100% - ' + height + 'px )';
  }

  node.addEventListener('resize', handleHeight);
  handleHeight();

  return {
    destroy() {
      node.removeEventListener('resize', handleHeight);
    }
  }
}

export function autoWidth(node: HTMLElement) {
  const handleWidth = () => {
    const parentNode = node.parentElement!;
    if(!parentNode) {
      return;
    }
    let width = 0;
    for (let i = 0; i < parentNode.children.length; i++) {
      if (parentNode.children[i] === node) {
        continue;
      }
      width += parentNode.children[i].clientWidth;
    }
    node.style.width = 'calc( 100% - ' + width + 'px )';
  }

  node.addEventListener('resize', handleWidth);

  handleWidth();

  return {
    destroy() {
      node.removeEventListener('resize', handleWidth);
    }
  }
}
