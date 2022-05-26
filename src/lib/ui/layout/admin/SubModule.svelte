<script>
  import Layout from '../Layout.svelte';
  import { autoWidth } from '../../../util/auto-size';
</script>

<Layout>
  <div use:autoWidth>
    <slot></slot>
  </div>
</Layout>

