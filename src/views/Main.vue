<template>
  <div id="mains">
    <!--<Header/>-->
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'main',
};
</script>
<style scoped lang="scss">
  #mains {
    background: $header-background;
    /*min-height: calc(100% - 93px)*/
    height: 100%;
  }
</style>
