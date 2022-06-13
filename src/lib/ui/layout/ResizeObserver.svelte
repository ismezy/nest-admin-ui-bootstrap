<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import ResizeObserver from 'resize-observer-polyfill';

  export let elementResize = undefined;
  const dispatch = createEventDispatcher();
  let component;
  let RO;
  onMount(() => {
    RO = new ResizeObserver((e) => {
      dispatch('resize', e[0].target);
    });
  });

  $: {
    if (component || elementResize) {
      const element = elementResize ? elementResize : component.parentNode;
      RO.observe(element);
    }
  }
  onDestroy(() => {
    if(RO) {
      RO.disconnect();
    }
  });
</script>

<div bind:this={component} style='width:0px' />
