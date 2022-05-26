<!-- 后台管理布局 -->
<script lang='ts'>
  import Layout from '../Layout.svelte';
  import Nav from './Nav.svelte';
  import { onMount } from 'svelte';
  import Main from './Main.svelte';
  import Header from './Header.svelte';
  import type { Menus } from '../../../model/menu';
  import { loadMenu } from '../../../services/menu.service';
  import { autoWidth, autoHeight } from '../../../util/auto-size';

  let menus: Menus = [];
  onMount(async () => {
    menus = await loadMenu();
  });
</script>
<Layout direction='column'>
  <Header></Header>
  <div use:autoHeight>
    <Layout>
      <Nav {menus} />
      <div use:autoWidth>
        <Layout direction='column'>
          <Main>
            <slot />
          </Main>
        </Layout>
      </div>
    </Layout>
  </div>
</Layout>
