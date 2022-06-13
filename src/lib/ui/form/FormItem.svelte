<script lang="ts">
  import { type FormField } from '../../model/form';
  import { TextField } from 'svelte-materialify';

  export let field: FormField;
  export let value: unknown = undefined;
</script>

<TextField bind:value={value} placeholder={field.placeholder}>{field.caption}</TextField>
