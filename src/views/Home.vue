<template>
  <div class="home">
    <p class="title">Game of Clones</p>
    <div class="main">
      <div @click="sendData(Droid,'droid')">
        <ArmyCard v-bind:sendDetail="Droid"/>
      </div>
      <div class="battle-btn" @click="sendData(Droid,'battle')">
      <p>New Battle</p>
      </div>
      <div @click="sendData(Tropper,'troopers')">
        <ArmyCard v-bind:sendDetail="Tropper"  />
      </div>
    </div>
  </div>
</template>

<script>
import ArmyCard from '@/components/ArmyCard.vue'

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    ArmyCard
  },
  data: () => {
    return {
      Tropper: {
        title: 'Troppers Army',
        types: 1,
        img: '../assets/images/Troopers/Grand_army_formation.jpg',
        color: 'blue'

      },
      Droid: {
        title: 'Droid Army',
        types: 0,
        img: '../assets/images/droidarmy/soliders.png',
        color: 'red'
      }
    }
  },
  methods: {
    sendData (troops, link) {
      this.$store.state.armyInt = this.$store.state.armyInt.concat([troops])
      this.$router.push(link)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  animation: fade 0.2s forwards;

  > .title {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 0 0 20px red;
  }
  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a{
        text-decoration: none,

  }
  .battle-btn {
    padding: 20px 15px;
    cursor: pointer;
    background: red;
    border: none;
    color: #fff;
    transform: skewX(-20deg);
    margin: 20px;
    font-weight: bold;
    font-size: 20px;
    animation: glow 3s infinite;
    border-radius: 5px;

    p {
      margin: 0;
    }
  }
}

  button {
    padding: 20px;
    font-size: 18px;
    border: none;
    color: #fff;
    letter-spacing: 2px;
    box-shadow: 0 2px 10px 5px rgba($color: #000000, $alpha: 0.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: skewX(-20deg);
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s;
    &:hover {
      transform: translateY(-2px) skewX(-20deg);
      animation: glow2 1s infinite;
    }
  }

@keyframes glow {
  0% {
    box-shadow: 0 0 10px 2px red;
  }
  50% {
    box-shadow: 0 0 20px 15px red;
  }
  100% {
    box-shadow: 0 0 10px 2px red;
  }
}
@keyframes glow2 {
  0% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 10px 5px #fff;
  }
  100% {
    box-shadow: none;
  }
}

</style>
