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
        },
        myW:this.width,
        myH:this.heigth,
    }
  }

}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #checkbox_container {
        position: relative;
    }
    #checkbox_container input {
        display: none;
    }
    #checkbox_container input+label {
        width: 100%;
        height: 100%;
        display: block;
        border: 3px solid red;
    }
    #checkbox_container input:checked+label::after {
        content: "";
        width: 80%;
        height:60%;
        border: 3px solid green;
        border-color:  transparent transparent green  green;
        position: absolute;
        transform: rotateZ(-70deg);
        box-sizing: border-box;
    }
</style>
