<script lang='ts'>
  import { Button, Card, CardText, CardTitle, Col, Row } from 'svelte-materialify';
  import { getContext } from 'svelte';
  import type { FormField } from '../../model/form';
  import type { Writable } from 'svelte/store';
  import FormItem from '../form/FormItem.svelte';

  const showTitle = getContext<boolean>('showTitle');
  const fields = getContext<Writable<FormField[]>>('filterFields');
  export let model: unknown = {};
  let simpleIndex = 0;
  let more = false;

  // 计算首行条件过滤条件，空出按钮位置
  $: {
    let totalSize = 0;
    let i = 0;
    for (; i < $fields.length; i++) {
      const fieldSize = ($fields[i].size || 3);
      if (totalSize + fieldSize > 9) {
        break;
      }
      totalSize += fieldSize;
    }
    simpleIndex = i;
  }

  $: _fields = more ? $fields : $fields.slice(0, simpleIndex);
</script>

<Card>
  {#if showTitle}
    <CardTitle class='d-flex flex-column flex-sm-row justify-space-between'>
      <span>搜索条件</span>
      {#if $fields.length > simpleIndex}
        <Button text on:click={() => {more = !more}}>{more ? '收起' : '更多'}</Button>
      {/if}
    </CardTitle>
  {/if}
  <CardText>
    <Row>
      {#each _fields as field, index(index)}
        <Col md={field.size}>
          <FormItem {field} bind:value={model[field.name]}></FormItem>
        </Col>
      {/each}
      <Col class='ml-auto filter-buttons'>
        {#if $fields.length > simpleIndex && !showTitle}
          <Button text on:click={() => {more = !more}}>{more ? '收起' : '更多'}</Button>
        {/if}
        <Button text>重置</Button>
        <Button class='primary-color'>查询</Button>
      </Col>
    </Row>
  </CardText>
</Card>

<style lang='scss'>
  :global(.filter-buttons) {
    text-align: right;
  }
</style>
