<script lang='ts'>
  import CurdPage from '../../../lib/ui/page/CurdPage.svelte';
  import type { FormField } from '../../../lib/model/form';

  let filterFields: FormField[] = [
    { caption: '标签', name: 'tag', required: true, size: 3, type: 'text', placeholder: '请输入字典标签'},
    { caption: '字典编码', name: 'code', required: true, size: 3, type: 'text' },
    { caption: '字典名', name: 'caption', required: true, size: 3, type: 'text' },
    { caption: '顺序号', name: 'orderNumber', required: true, size: 3, type: 'text' },
  ];
</script>

<CurdPage showTitle={true} {filterFields}></CurdPage>
