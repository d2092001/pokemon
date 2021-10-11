<template>
  <div class="screen">
    <h1>Tương tác</h1>
    <card-flip
      v-for="(card, index) in MangThe"
      :key="index"
      :ref="`card-${index}`"
      :AnhMatChinhUrl="`images/${card}.png`"
      :card="{ index, value: card }"
      @onFlip="checkRule($event)"
    />
    <!--   :card="card"    đẩy sang cho Card  để biết là thẻ nào-->
  </div>
</template>

<script>
import CardFlip from "./Card";

export default {
  props: {
    MangThe: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: { CardFlip },
  data() {
    return {
      rules: [], //đẩy giá trị vừa link ấy vào mảng này
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("Dung...");
        this.$refs[`card-${this.rules[0].index}`].onDung();
        this.$refs[`card-${this.rules[1].index}`].onDung();
        this.rules = [];

        const DemThangCoClass = document.querySelectorAll(
          " .card.disabled .card__inner"
        );

        if (
          DemThangCoClass &&
          DemThangCoClass.length === this.MangThe.length - 2
        )
          setTimeout(() => {
            this.$emit("endGame");
          }, 920);
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("sai...");
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();

          this.rules = [];
        }, 800);
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.screen{
  widows: 100%;
  height: 100vh;
}
</style>
