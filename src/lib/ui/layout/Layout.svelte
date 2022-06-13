<script lang='ts'>
  import type { LayoutDirection } from './LayouyDef';
  import classNames from 'classnames';

  let dom: HTMLElement;
  let className = '';
  export { className as class };
  export let direction: LayoutDirection = 'row';

  $: classes = classNames(className, {
    'myui-layout': true,
    'row-mode': direction !== 'column',
    'column-mode': direction === 'column'
  });
</script>

<div class={classes} bind:this={dom}>
  <slot />
</div>

<style lang='scss'>
  .myui-layout {
    display: flex;
    flex: auto;

    &.row-mode {
      flex-direction: row;
    }

    &.column-mode {
      flex-direction: column;
    }
  }
</style>
