<template>
  <div class="app">
      {{message}}
  </div>
</template>
<script>
export default {
  name: "app",
  data: function data() {
    return {
        message:'沃日你个',
    }
  }
}
</script>
<style>
    * {margin: 0;padding: 0}
    html,body {width: 100%;height: 100%}
    .app {
        width: 100%;
        height: 200px;
        background-color: red;
        text-align: center;
    }
</style>
