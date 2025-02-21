<script setup>

</script>

<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="ResultPage">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>