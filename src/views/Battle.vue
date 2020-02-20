<template>
<el-row>
  <div class="header" >
      <p class="title" >BATTLEGROUND</p >
  </div>
<el-row class="battleground">
    <div class="main-battle">
        <div v-for="(army,index) in droidsTroops" v-bind:key="index" class="droid">
            <BattleCard :hdata="army" @change="changecount"/>
        </div>
    </div>
    <el-row class='button-grp'>
        <button @click="totaltroops" style="background: blue;marginRight:10px;padding:5px"><i class="el-icon-files"></i>Assemble</button>
        <button @click="postcount" style= "background: blue;marginRight:10px;padding:5px "> <i class="el-icon-video-play"></i> Fight</button>
        <button @click="gotohome" style="background:blue;marginRight:10px;padding:5px "><i class="el-icon-s-home"></i>Home</button>
    </el-row>
</el-row>
</el-row>
</template>
<script>
import { mapState } from 'vuex'
import BattleCard from '@/components/BaattleCard.vue'
export default {
  name: 'battle',
  components: {
    BattleCard
  },
  data () {
    return {
      droid: [],
      droidsTroops: [],
      totalcount: null,
      toggle: false
    }
  },
  mounted () {
    this.$store.dispatch('getDroid')
  },
  computed: {
    ...mapState({
      droidatbattle: state => {
        return state.DroidArmy
      }
    })
  },

  methods: {
    changecount (count, num) {
      if (count < 0 || count > 7) {
        alert("please don't show your anger on the counter :)")
      } else {
        // find method
        for (var i in this.droidsTroops) {
          if (this.droidsTroops[i].slnumber === num) {
            this.droidsTroops[i].count = count
            break // Stop this loop, we found it!
          }
        }
      }
    },
    gotohome () {
      this.$router.push({ name: 'home' })
    },
    totaltroops () {
      if (this.droidsTroops != null) {
        for (var i in this.droidsTroops) {
          this.totalcount += this.droidsTroops[i].count
        }
        if (this.totalcount !== 0) {
          this.toggle = true
        } else {
          alert('please add troop to gather')
        }
      }
    },
    async postcount () {
      if (!this.toggle) {
        alert('please gather your troops  set!!')
      }
      if (this.totalcount !== 0 && this.toggle) {
        this.$store.state.count = this.totalcount
        await this.$store.dispatch('uploadCount')
        this.$router.push('battleresult')
      }
    }
  },
  watch: {
    droidatbattle: {
      handler (val) {
        this.droid = val
        this.droidsTroops = val.map((item) => {
          return { ...item, count: 0 }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.battleground{
    color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top:0;
    .main-battle{
        height: 100vh;
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        >.droid{
            width:50%
        }
}
}
.button-grp{
position: fixed;
    bottom: 0;
    right: 0;
     >button{
        font-size: 5ppx;
        font-weight: bold;
        margin:0 10px 10px 2px;
        background:rgba(36, 32, 32, 0);
        color:#fff;
        border:3px solid transparent;
        cursor: pointer;
        outline: none;
        transition: 0.2s;
        letter-spacing: 2px;
        border-radius: 5px;
        &:hover{
            border:3px solid rgb(105, 96, 96);
            color:rgb(8, 8, 8);
        }

        &:active{
            background: red ;
            color:#fff;
        }

    }

    }

</style>
