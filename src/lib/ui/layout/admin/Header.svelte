<script lang='ts'>
  import { AppBar, Button } from 'svelte-materialify';
  import { SlideGroup, SlideItem } from 'svelte-materialify/dist';

  import { loadMenu } from '../../../services/menu.service';
  import { onMount } from 'svelte';
  import type { Menu, Menus } from '../../../model/menu';
  import IconFont from '../../icon/IconFont.svelte';
  import { page } from '$app/stores';
  import Layout from '../Layout.svelte';
  import { autoWidth } from '../../../util/auto-size';
  import { afterNavigate } from '$app/navigation';

  export let menuIndex = 0;
  export let menus: Menus = [];  // 菜单
  let pathname = $page.url.pathname; // 当前url地址
  let moduleMap : {[key: string]: number} = {};  // 路由地址与模块索引映射

  onMount(async () => {
  });

  afterNavigate(({to}) => {
    pathname = to.pathname;
  });

  $: {
    moduleMap = {};
    menus.forEach((it, index) => {
      addToMap(it, index);
    });
  }

  $: menuIndex = moduleMap[pathname];

  const addToMap = (menu: Menu, moduleIndex: number) => {
    moduleMap[menu.path] = moduleIndex;
    menu.children?.forEach(it => addToMap(it, moduleIndex));
  }
</script>

<div>
  <AppBar dense flat>
    <Layout class='admin-layout-header' direction='row'>
      <div class='logo'>
        <IconFont icon='nest' />
      </div>
      <h5 class='text-h5 pr-2 pl-2 blue-text title'>NEST ADMIN</h5>
      <div use:autoWidth>
        <SlideGroup mandatory value={[0]}>
          {#each menus as menu, index(index)}
            <SlideItem>
              <a href={menu.path}>
                <Button tile depressed
                        class={`mr-1 ml-1 ${index === menuIndex ? 'primary-color' : 'primary-text'}`}>
                  <IconFont icon={menu.icon} /> {menu.title}
                </Button>
              </a>
            </SlideItem>
          {/each}
        </SlideGroup>
      </div>
    </Layout>
  </AppBar>
</div>
<style lang='scss'>
  :global(.logo .iconfont) {
    font-size: 2rem;
  }

  :global(.admin-layout-header) {
    align-items: center;
  }
  :global(.admin-layout-header .title) {
    white-space: nowrap;
  }

  a {
    text-decoration: none;

    :global(.s-btn) {
      font-size: 1rem;
    }

    :global(.iconfont) {
      margin-right: 10px;
      font-size: 1.5rem;
    }
  }
</style>


