<template>
    <el-row>

            <HistoryTable v-bind:hdata="Historydata"/>
    </el-row>
</template>
<script>
import { mapState } from 'vuex'
import HistoryTable from '../components/HistoryTable.vue'
export default {
  name: 'BattleHistory',
  components: {
    HistoryTable
  },
  data () {
    return {
      Historydata: []
    }
  },
  computed: {
    ...mapState({
      historydata: state => {
        return state.BattleHistory
      }
    })
  },
  mounted () {
    this.$store.dispatch('getHistory')
  },
  watch: {
    historydata: {
      handler (val) {
        console.log(val)
        this.Historydata = val
      }
    }
  }
}
</script>
