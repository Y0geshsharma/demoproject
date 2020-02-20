<template>
<div class='ArmyCard' :style={borderColor:sendDetail.color}>
    <img :src ="`${sendDetail.img}`" alt="armyhomeimage">
    <p :style={color:sendDetail.color} class='title'>{{sendDetail.title}}</p>
    <div class='mask' :style={background:sendDetail.color} />
</div>
</template>
<script>
export default {
  name: 'ArmyCard',
  props: ['sendDetail']
}
</script>
<style scoped lang="scss">
.absolute-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.ArmyCard {
  position: relative;
  color: #fff;
  padding: 20px;
  border: 2px solid #fff;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  background: rgba(0, 0, 0, 1);
  min-width: 30vw;
  min-height: 30vw;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px 0px red;
  }
  > .title {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 40px;
    z-index: 10;
    font-weight: bold;
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
      1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    letter-spacing: 2px;
  }
  > .mask {
    @extend .absolute-fill;
    opacity: 0.3;
  }
  > img {
    @extend .absolute-fill;
    background: #fff;
    object-fit: fill;
    height: 100%;
     width: 100%;
    object-position: center;
  }
}
 .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    z-index: 10;
    opacity: 0.5;
  }

</style>
