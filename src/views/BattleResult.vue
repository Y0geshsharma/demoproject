<template>
    <div class='battle-result'>
      <div class='mask' />
            <div>
                  <img :src="imgurl" />
            </div>
            <div class='winner-details'>
                <p class='title'>{{result.Winner}} Won!</p>
                 <p class='det'>Total battle points <span>{{result.TotalBattlePoint}}</span></p>
                <p class='det'>Number of Kills <span>{{result.TotalKill}}</span></p>
                <p class='det'>Total Damage <span>{{result.TotalDamage}}</span></p>
                <div class='button-grp'>
                    <button @click="gotohistory" style="background: red"> History</button>
                    <button @click="gotohome" style="background: blue"> Home</button>
                </div>
            </div>
        </div>

</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'battleresult',
  data () {
    return {
      result: [],
      imgurl: ''
    }
  },
  methods: {
    gotohome () {
      this.$router.push('/')
    },
    gotohistory () {
      this.$router.push('battlehistory')
    }
  },
  mounted () {
    this.$store.dispatch('getResult')
  },
  computed: {
    ...mapState({
      resultdata: state => {
        return state.BattleResult
      }
    })
  },
  watch: {
    resultdata: {
      handler (val) {
        this.result = val[0]
        if (this.result.Winner === 'Clone Tropper') {
          console.log('reached')
          this.imgurl = '/assets/images/Troopers/41st_Elite_Corps.png'
        } else if (this.result.Winner === 'Droid') {
          console.log('reached')
          this.imgurl = '/assets/images/droid army/Battle_Droids.png'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$color:blue;
.battle-result {
  animation: reveal 1s forwards;
  img {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $color;
    z-index: 10;
    opacity: 0.5;
  }
  .winner-details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 30;
    .title{
      font-size:10vh;
      color: #fff;
      text-shadow: 0 2px 20px rgba($color: #fff, $alpha: 1.0)
    }
    .det{
      color:#fff;
      margin: 10px 0;
      transform: skewX(-20deg);
      display: flex;
      flex-direction: row;
      align-items: center;
      span{
        padding: 5px 10px;
        background: #000;
        border-radius: 2px;
        color:#fff;
        margin-left: 5px;
        animation: shift 0.3s 1s forwards;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }
    }
    .button-grp{
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      width: 15%;
      button{
        padding: 20px;
        font-size: 18px;
        border:none;
        color:#fff;
        letter-spacing: 2px;
        box-shadow: 0 2px 10px 5px rgba($color: #000000, $alpha: 0.2);
        display: flex;
        align-items: center;
        justify-content: space-around;
        transform: skewX(-20deg);
        margin:5px;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.2s;
        &:hover{
          transform: translateY(-2px) skewX(-20deg);
          animation: glow2 1s infinite;
        }
      }
    }
  }
}
@keyframes shift{
  0%{margin-left: 0; opacity: 0;}
  50%{margin-left: 30px;opacity: 1;}
  100%{margin-left: 10px; opacity: 1;}
}
@keyframes glow2 {
  0% {
    box-shadow:none;
  }
  50% {
    box-shadow: 0 0 10px 5px #fff;
  }
  100% {
    box-shadow: none;
  }
}
@keyframes reveal{
  from{opacity: 0;}
  to{opacity: 1;}
}
</style>
