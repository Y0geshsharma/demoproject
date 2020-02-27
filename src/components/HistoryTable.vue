<template>
<div class="test">
  <el-table :data="hData" height="680"  style="width: 100%"  >
    <el-table-column  prop="id" label="ID" width="180" > </el-table-column>
    <el-table-column  prop="winner"  label="Winner" width="180"> </el-table-column>
    <el-table-column  prop="totalBattlePoint" label="TotalBattlePoint">  </el-table-column>
   <el-table-column  prop="totalKill" label="TotalKill">  </el-table-column>
    <el-table-column  prop="totalDamage" label="TotalDamage">  </el-table-column>
    <el-table-column  prop="status" label="status">  </el-table-column>
    <el-table-column  prop="createdAt" label="Time of battle">  </el-table-column>
  </el-table>
<div style="position:fixed;bottom:0;right:0;color:white;font-size:50px;cursor:pointer">
  <i class="el-icon-s-home"  @click="gotoHome"></i>
</div>
</div>
</template>
<script>
export default {
  props: ['hData'],
  methods: {
    gotoHome () {
      this.$router.push('/')
    }
  }

}
</script>
<style lang="scss" >
tbody{
>tr{
  background-image: url('../assets/images/mainbackground.png') !important;
  color:white;
  &:hover {
    color:black;
   }
}
}

tr{
  >th{
    color:white;
  background:black !important

  }
}
tbody {
  background: none ;
    font-weight: bold;
    height: 100%;
    width: 100%;
}
</style>
