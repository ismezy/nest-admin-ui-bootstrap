<script lang="ts">

  import classNames from 'classnames';

  let className = '';
  export { className as class };
  export let icon: string;

  // $: href = `#icon-${icon}`;

  $: classes = classNames(className, 'iconfont', `icon-${icon}`);
</script>

<i class={classes}></i>

<style lang="scss">
  //.youi-svgicon {
  //  width: 1em; height: 1em;
  //  vertical-align: -0.15em;
  //  fill: currentColor;
  //  overflow: hidden;
  //}
</style>
