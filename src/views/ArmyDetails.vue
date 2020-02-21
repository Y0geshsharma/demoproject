<template >
  <div>
    <div class="row1">
      <div class="army-details-title">
        <i
          class="el-icon-d-arrow-left"
          :style="{color:color}"
          style="font-size:50px;cursor:pointer"
          @click="gotoHome"
        ></i>

        <p class="titlle" :style="style">{{title}}</p>
      </div>
    </div>

    <div class="row">
      <div
        class="army-details"
        v-for="(army, index) in armiesState"
        v-bind:key="index + 'armyDetailsCard'"
      >
        <ArmyDetailsCard :armyData="army" :color="color" />
      </div>
    </div>
    <button
      class="add-army-btn"
      :style="{background:color}"
      @click="addArmy()"
    >ADD {{title.toUpperCase()}}</button>
  </div>
</template>

<script>
import ArmyDetailsCard from '@/components/ArmyDetailsCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Details',
  components: {
    ArmyDetailsCard
  },
  mounted () {
    this.current = 'add' + this.$router.history.current.name
    let length = this.$store.state.armyInt.length
    let armytype = this.$store.state.armyInt[length - 1]
    this.title = armytype.title
    this.color = armytype.color
    this.types = armytype.types

    if (this.types === 1) {
      this.$store.dispatch('getTrooper')
    } else if (this.types === 0) {
      this.$store.dispatch('getDroid')
    } else {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      armies: state => {
        return state.DroidArmy
      },
      armies1: state => {
        return state.TroopersArmy
      }
    })
  },
  watch: {
    armies: {
      handler (val) {
        this.armiesState = val
      }
    },
    armies1: {
      handler (val) {
        this.armiesState = val
      }
    }
  },
  data () {
    return {
      armiesState: [],
      title: '',
      color: '',
      current: '',
      type: ''
    }
  },
  methods: {
    style () {
      return 'text-shadow:' + '0 0 20px ' + this.color
    },
    addArmy () {
      let route = this.$router.history.current.name + '/add'
      this.$router.push(route)
    },
    gotoHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped lang='scss'>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.army-details-title {
  display: flex;
  flex-direction: row;
  > p {
    color: #fff;
    font-weight: bold;
    justify-self: center;
    flex: 1;
    text-align: center;
  }
}

.titlle {
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 0 0 20px white;
}
.add-army-btn {
  position: fixed;
  bottom: 5%;
  right: 5%;
  transform: skewX(-20deg);
  padding: 20px;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    animation: glowe 2s infinite;
  }
}
@keyframes glowe {
  0% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 20px 0px #fff;
  }
  100% {
    box-shadow: none;
  }
}
</style>
