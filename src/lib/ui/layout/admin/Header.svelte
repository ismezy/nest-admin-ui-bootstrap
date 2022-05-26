<script>
  import IconFont from '../../icon/IconFont.svelte';
  import { AppBar } from 'svelte-materialify';
</script>

<div class='admin-layout-header'>
  <AppBar dense>
    <div class='logo'>
      <IconFont icon='nest' />
    </div>
  </AppBar>
</div>

<style lang='scss'>
  .admin-layout-header {
    //height: 40px;
  }
</style>
