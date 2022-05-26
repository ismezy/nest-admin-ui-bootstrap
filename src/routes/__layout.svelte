<script>
  import '../app.scss';
  import { MaterialApp } from 'svelte-materialify';

  let theme = 'light';
</script>

<MaterialApp {theme}>
  <slot></slot>
</MaterialApp>

<style lang='scss'>
  :global(.s-app) {
    height: 100%;
  }
</style>
