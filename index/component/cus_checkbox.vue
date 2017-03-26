<template>
  <div id="checkbox_container" :style="styleObj">
      <input type="checkbox" id="checkbox">
      <label></label>
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
            backgroundColor:'#f00'
        }
    }
  }
}
</script>
<style>
    #checkbox_container input {
        display: none;
    }
    #checkbox_container label {
        width: 100%;
        height: 100%;
        display: block;
        background-color: green
    }
</style>
