<template>
    <el-row>
            <HistoryTable v-bind:hData="Historydata"/>
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
        return state.battleHistory
      }
    })
  },
  mounted () {
    this.$store.dispatch('getHistory')
  },
  watch: {
    historydata: {
      handler (val) {
        this.Historydata = val
      }
    }
  }
}
</script>
