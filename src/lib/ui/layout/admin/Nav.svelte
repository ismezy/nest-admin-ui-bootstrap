<script lang='ts'>
  import { type Menus } from '../../../model/menu';
  import { autoHeight } from '../../../util/auto-size';
  import classNames from 'classnames';
  import IconFont from '../../icon/IconFont.svelte';
  import {
    NavigationDrawer,
    List,
    ListItem,
    Divider
  } from 'svelte-materialify';

  let className = '';
  export { className as class };

  export let menus: Menus = [];

  $: classes = classNames(className, {
    'admin-layout-nav': true
  });
</script>

<div class={classes}>
  <!--    <ul class='nav'>-->
  <!--      {#each menus as menu, index (index)}-->
  <!--        <li class='item' class:active={$page.url.pathname === menu.path}>-->
  <!--          <a href={menu.path}>-->
  <!--            <IconFont icon={menu.icon} />-->
  <!--            <span>{menu.title}</span>-->
  <!--          </a>-->
  <!--        </li>-->
  <!--      {/each}-->
  <!--    </ul>-->
  <NavigationDrawer>
    <List dense nav>
      {#each menus as menu, index (index)}
        <ListItem><span slot='prepend'><IconFont icon={menu.icon} /></span> <a href={menu.path}>{menu.title}</a>
        </ListItem>
      {/each}
    </List>
  </NavigationDrawer>
</div>

<style lang='scss'>
  .admin-layout-nav {
    background: var(--bs-body-color);
    display: flex;
    flex-direction: column;
    height: 100%;

    .logo {
      color: #fff;
      height: 40px;
      line-height: 40px;
      text-align: center;

      :global(.iconfont) {
        font-size: 2rem;
      }
    }
  }
</style>
