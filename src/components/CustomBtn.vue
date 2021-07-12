<template>
    <button class="custom-btn" :type="type">
        {{title}}
    </button>
</template>

<script>
export default {
  name: 'CustomBtn',
  props: {
    title: {
      required: true,
      type: String
    },
    type: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.custom-btn {
  background: unset;
  border: 1px solid $primary;
  color: $primary;
  outline: none;
  font-size: 16px;
  min-width: 120px;
  height: 40px;
  transition: $transition;

  &:hover {
    background-color: $primary-transparent;
    border-color: transparent;
  }
}
</style>
