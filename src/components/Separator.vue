<template>
    <div class="separator" :class="color"></div>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style scoped lang="scss">
.separator {
  height: 2px;
  width: 50px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.primary {
  background-color: $primary;
}
.dark {
  background-color: rgba(65, 61, 75, 0.3);
}

.white {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
