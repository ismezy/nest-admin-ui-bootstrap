<script lang="ts">
  import { autoHeight } from '../../../util/auto-size';
</script>

<div class="admin-layout-main" use:autoHeight>
  <slot />
</div>

<style lang="scss">
  .admin-layout-main {
    background: #aaa;
    flex: 1;
    overflow: auto;
  }
</style>
