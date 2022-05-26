<script lang="ts">
  import AdminLayout from '../../lib/ui/layout/admin/AdminLayout.svelte';
</script>

<div class='root-layout'>
  <AdminLayout>
    <slot />
  </AdminLayout>
</div>

<style lang='scss'>
  .root-layout {
    height: 100%;

    :global(.youi-layout) {
      height: 100%;
    }

    //.header {
    //  padding: 0 20px;
    //  height: 100%;
    //}
    //
    //.header-item {
    //  height: 100%;
    //  display: flex;
    //  align-items: center;
    //}
  }
</style>
