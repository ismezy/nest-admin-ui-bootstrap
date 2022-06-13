<!-- 后台管理布局 -->
<script lang='ts'>
  import Layout from '../Layout.svelte';
  import Nav from './Nav.svelte';
  import Main from './Main.svelte';
  import Header from './Header.svelte';
  import type { Menus } from '../../../model/menu';
  import { loadMenu } from '../../../services/menu.service';
  import { autoWidth, autoHeight } from '../../../util/auto-size';
  import { MaterialApp } from 'svelte-materialify';
  import { onDestroy, onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  let theme = 'light';
  let menus: Menus = [];
  let menuIndex = 0;
  let rightDiv: HTMLDivElement;
  let leftNav: Nav;

  onMount(async () => {
    try {
      menus = await loadMenu();
    } catch {
      menus = [];
    }
  });


  function navResizeHandle() {
    if (rightDiv) {
      autoWidth(rightDiv);
    }
  }
</script>
<MaterialApp {theme}>
  <Layout direction='column' class='root-layout'>
    <Header {menus} bind:menuIndex={menuIndex}></Header>
    <div use:autoHeight>
      <Layout class='root-layout'>
        <Nav menus={menus[menuIndex]?.children || []} on:resize={navResizeHandle} bind:this={leftNav} />
        <div use:autoWidth class='right' bind:this={rightDiv}>
          <Layout direction='column'>
            <Main>
              <slot />
            </Main>
          </Layout>
        </div>
      </Layout>
    </div>
  </Layout>
</MaterialApp>

<style lang='scss'>
  :global(.myui-layout) {
    height: 100%;
  }

  :global(.s-app) {
    height: 100%;
  }
</style>
