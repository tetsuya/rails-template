<template>
  <p>{{ message }}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
