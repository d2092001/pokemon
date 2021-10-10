<template>
  <div class="Screen">
    <h1>Game pokemon</h1>
    <h3>Chọn chế độ chơi</h3>
    <div class="action">
      <button @click="onBatDau(16)">
        <span>4x4</span>
        <span>Dễ</span>
      </button>
      <button @click="onBatDau(36)">
        <span>6x6</span>
        <span>Bình thường</span>
      </button>
      <button @click="onBatDau(64)">
        <span>8x8</span>
        <span>Khó</span>
      </button>
      <button @click="onBatDau(100)">
        <span>10x10</span>
        <span>Siêu khó</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainScreen",
  methods: {
    onBatDau(SoO) {
      this.$emit("onBatDau", { SoO });
    },
  },
};
</script>

<style scoped></style>
