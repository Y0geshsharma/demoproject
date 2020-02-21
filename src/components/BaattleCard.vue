<template>
  <div class="battle-card">
    <div class="army-battle-kind">
      <img :src="imageurl" alt />
    </div>

    <div class="army-battle-count" style="background:red">
      <div>
        <p>{{historydata.Kind}}</p>
      </div>
      <div>
        <button @click="incrimentcount()">+</button>
        <p>{{count}}</p>
        <button @click="decrementcount()">-</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['historyData'],
  data () {
    return {
      count: 0,
      imageurl: '@/../' + this.hdata.image
    }
  },
  methods: {
    incrementcount (num) {
      if (this.count > 6) {
        this.count = 7
      } else {
        this.count += 1
        this.$emit('change', this.count, this.historydata.slnumber)
      }
      return this.count
    },
    decrementcount (num) {
      if (this.count < 1) {
        this.count = 0
      } else {
        this.count -= 1
        this.$emit('change', this.count, this.historydata.slnumber)
      }
      return this.count
    }
  }
}
</script>
<style lang="scss" scoped>
.battle-card {
  display: grid;
  grid-template-columns: 2fr 8fr;
  margin: 20px 10px;
  color: #222;
  transition: 0.2s;
  animation: getin 1s;
  // opacity: 0 ;
  &:hover {
    transform: translateY(-2px);
  }

  .army-battle-kind {
    background: #000;
    transform: skewX(-15deg);
    border-radius: 2px;
    height: 10vh;
    overflow: hidden;
    border: 2px solid red;
    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }
  .army-battle-count {
    display: flex;
    flex-direction: row;
    margin: 0 10px;
    background: red;
    color: #fff;
    transform: skewX(-15deg);
    border-radius: 2px;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
    & p:nth-child(2) {
      display: flex;
      padding-left: 5%;
      font-size: 20px;
      font-weight: bold;
      border-left: 1px solid rgba($color: #fff, $alpha: 0.6);
      height: 60%;
      align-items: center;
    }
  }
}
</style>
