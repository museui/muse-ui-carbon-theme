<template>
<div>
  <mu-appbar title="muse-ui-carbon-theme" color="primary"></mu-appbar>
  <mu-container>
    <mu-form :model="{}">
      <mu-form-item label="text input">
        <mu-text-field></mu-text-field>
      </mu-form-item>
      <mu-form-item label="checkbox">
        <mu-checkbox label="checkbox" input-value/>
        <mu-radio label="radio" input-value="11" value="11"/>
        <mu-checkbox label="switch" input-value />
      </mu-form-item>
      <mu-form-item>
        <mu-slider :value="60"/>
      </mu-form-item>
    </mu-form>
  </mu-container>
</div>
</template>
<script>
export default {
  name: 'App'
};
</script>
