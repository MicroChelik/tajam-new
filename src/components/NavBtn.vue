<template>
    <a :href="'#' + id">
        <button class="nav-btn">
            {{title}}
        </button>
    </a>
</template>

<script>
export default {
  name: 'NavBtn',
  props: {
    title: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.nav-btn {
  background: unset;
  border: 0;
  color: $white;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 900;
  outline: none;
  transition: $transition;

  &:hover {
    color: $primary;
  }
}

.active {
  color: $primary;
}
</style>
