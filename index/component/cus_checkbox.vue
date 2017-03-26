<template>
  <div id="checkbox_container" :style="styleObj">
      <input type="checkbox" id="checkbox">
      <label for="checkbox"></label>
  </div>
</template>
<script>
export default {
  name: "cus_checkbox",
  props: ['width','height'],
  data: function data() {
    return {
        styleObj:{
            width:this.width,
            height:this.height,
        }
    }
  }
}
</script>
<style>
    #checkbox_container input {
        display: none;
    }
    #checkbox_container input+label {
        width: 100%;
        height: 100%;
        display: block;
    }
    #checkbox_container input:checked+label {
        border: 3px solid red;
    }
</style>
