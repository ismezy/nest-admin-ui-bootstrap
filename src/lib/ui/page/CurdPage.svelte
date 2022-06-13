<script lang='ts'>
  import FilterForm from './FilterForm.svelte';
  import { setContext } from 'svelte';
  import { type FormField } from '../../model/form';
  import { writable } from 'svelte/store';

  export let filterFields: FormField[] = [];
  export let showTitle = false;
  const _filterFields = writable(filterFields);
  setContext('showTitle', showTitle);
  setContext('filterFields', _filterFields);

  $: $_filterFields = filterFields;
</script>

<FilterForm></FilterForm>

