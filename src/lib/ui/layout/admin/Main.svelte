<script lang='ts'>
  import { autoHeight } from '../../../util/auto-size';
  import { Breadcrumbs } from 'svelte-materialify';
  import { afterNavigate } from '$app/navigation';
  import { getBreadcrumbs } from '../../../services/menu.service';
  import { onMount } from 'svelte';

  let breadcrumbItems = [];

  onMount(() => {
  });
  afterNavigate(async ({ to }) => {
    breadcrumbItems = (await getBreadcrumbs(to.pathname)).map(it => ({text: it.title, href: it.path}));
  });
</script>

<Breadcrumbs items={breadcrumbItems}></Breadcrumbs>
<div class='admin-layout-main' use:autoHeight>
  <slot />
</div>

<style lang='scss'>
  .admin-layout-main {
    background: #aaa;
    flex: 1;
    overflow: auto;
    padding: 12px;
  }
</style>
