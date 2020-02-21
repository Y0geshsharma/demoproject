<template>
<div class="test">
  <el-table :data="hdata" height="680"  style="width: 100%"  >
    <el-table-column  prop="slnumber" label="slnumber" width="180" sucess> </el-table-column>
    <el-table-column  prop="Winner"  label="Winner" width="180"> </el-table-column>
    <el-table-column  prop="TotalBattlePoint" label="TotalBattlePoint">  </el-table-column>
   <el-table-column  prop="TotalKill" label="TotalKill">  </el-table-column>
    <el-table-column  prop="TotalDamage" label="TotalDamage">  </el-table-column>
    <el-table-column  prop="status" label="status">  </el-table-column>
    <el-table-column  prop="time" label="Time of battle">  </el-table-column>
  </el-table>
<div style="position:fixed;bottom:0;right:0;color:white;font-size:50px">
  <i class="el-icon-s-home"  @click="gotoHome"></i>
</div>
</div>
</template>
<script>
export default {
  props: ['hdata'],
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
