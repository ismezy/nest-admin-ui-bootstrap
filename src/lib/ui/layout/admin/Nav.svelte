<script lang='ts'>
  import { type Menus } from '../../../model/menu';
  import { autoHeight } from '../../../util/auto-size';
  import classNames from 'classnames';
  import IconFont from '../../icon/IconFont.svelte';
  import {
    NavigationDrawer,
    List,
    ListItem,
    Divider, Button
  } from 'svelte-materialify';
  import Layout from '../Layout.svelte';
  import ResizeObserver from '../ResizeObserver.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatcher = createEventDispatcher();
  let className = '';
  export { className as class };

  export let menus: Menus = [];
  let closed = false;

  $: classes = classNames(className, {
    'admin-layout-nav': true
  });

  $: handleIcon = closed ? 'indent-w' : 'outdent-w';

  function toggleNav() {
    closed = !closed;
  }

  function resizeHandle(event) {
    dispatcher('resize', event);
  }
</script>
<div class='admin-layout-nav'>
  <ResizeObserver on:resize={resizeHandle}></ResizeObserver>
  {#if menus.length}
    <Layout direction='column'>
      <div use:autoHeight>
        <NavigationDrawer class='theme--dark nav-menu flat' mini={closed}>
          <List dense nav>
            {#each menus as menu, index (index)}
              <ListItem><a slot='prepend' href={menu.path}>
                <IconFont icon={menu.icon} />
              </a> <a href={menu.path}>{menu.title}</a>
              </ListItem>
            {/each}
          </List>
        </NavigationDrawer>
      </div>
      <div class='handle theme--dark '>
        <Button icon class='indigo-text lighten-4' on:click={toggleNav}>
          <IconFont icon={handleIcon} />
        </Button>
      </div>
    </Layout>
  {/if}
</div>

<style lang='scss'>
  .admin-layout-nav {
    //width: 256px;
    height: 100%;

    .handle {
      text-align: center;
    }

    :global(.nav-menu .iconfont) {
      margin-right: 1rem;
    }

    :global(.nav-menu a) {
      color: #fff;
      text-decoration: none;
    }

    :global(.logo .iconfont) {
      font-size: 2rem;
      margin-left: 16px;
    }

    :global {
      .iconfont {
        font-size: 24px;
      }
    }
  }
</style>
