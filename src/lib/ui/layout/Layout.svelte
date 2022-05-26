<script lang='ts'>
  import type { LayoutDirection } from './LayouyDef';
  import classNames from 'classnames';

  let className = '';
  export { className as class };
  export let direction: LayoutDirection = 'row';

  $: classes = classNames(className, {
    'youi-layout': true,
    'row-mode': direction !== 'column',
    'column-mode': direction === 'column'
  });
</script>

<div class={classes}>
  <slot />
</div>

<style lang='scss'>
  .youi-layout {
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
