<template>
  <div class="screen">
    <h1>thanh cong</h1>
    <p>{{ Math.round(timer / 1000) }} giay</p>
    <button @click="ChoiLai">Choi lai</button>
  </div>
</template>

<script>
export default {
  name: "result",
  props: {
    timer: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ChoiLai() {
      this.$emit("onChoiLai");
    },
  },
};
</script>

<style scoped></style>
