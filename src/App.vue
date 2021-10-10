<template>
  <main-screen
    v-if="TrangThaiGame === 'MacDinh'"
    @onBatDau="TruocKhiBatDau($event)"
  />
  <interact-screen
    v-if="TrangThaiGame === 'TrongTran'"
    :MangThe="settings.MangThe"
    @endGame="layketqua"
  />
  <result
    v-if="TrangThaiGame === 'result'"
    :timer="timer"
    @onChoiLai="TrangThaiGame = 'MacDinh'"
  />
</template>

<script>
import MainScreen from "./components/MainScreen";
import InteractScreen from "./components/InteractScreen";
import { TronLan } from "./xu_li/array";
import Result from "./components/result";

export default {
  name: "App",
  components: { Result, InteractScreen, MainScreen },
  data() {
    return {
      settings: {
        TongSoThe: 0,
        MangThe: [],
        thoigianbatdau: null,
      },
      TrangThaiGame: "MacDinh",
      timer: 0,
    };
  },

  methods: {
    TruocKhiBatDau(config) {
      this.settings.TongSoThe = config.SoO; //lấy số thẻ
      const MotNua = Array.from(
        { length: this.settings.TongSoThe / 2 },
        (_, i) => i + 1
      );
      const NuaConLai = [...MotNua];
      const cards = [...MotNua, ...NuaConLai];
      this.settings.MangThe = TronLan(TronLan(TronLan(TronLan(cards))));
      this.settings.thoigianbatdau = new Date().getTime();
      this.TrangThaiGame = "TrongTran";
    },
    layketqua() {
      this.timer = new Date().getTime() - this.settings.thoigianbatdau;
      this.TrangThaiGame = "result";
    },
  },
};
</script>

<style></style>
