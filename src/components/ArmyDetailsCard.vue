<template >
   <div class="flip-card" >
       <div class="flip-card-inner">
           <div class="flip-card-front" :style={background:color}>
               <img :src="imgurl" alt=""/>
            </div>
            <div class="flip-card-back">
                 <h2>{{armydata.Kind}}</h2>
                 <h6>{{armydata.Description}}</h6>
                 <div className='traits'>
                    <ul>
                        <li>Strength:{{armydata.Strength}}</li>
                        <li>Agility:{{armydata.Agility}}</li>
                        <li>Intellignce:{{armydata.Intelligence}}</li>
                    </ul>
                    <ul >
                        <li v-for="(tarrian) in tarrians" v-bind:key="tarrian">{{tarrian}}</li>
                    </ul>
                 </div>
                </div>
            </div>
   </div>
</template>
<script>
export default {

  name: 'armycarddetails',
  props: ['armydata', 'color'],
  data () {
    return {
      imgurl: this.armydata.image,
      tarrians: {}
    }
  },
  mounted () {
    console.log(this.armydata)
    this.tarrians = this.armydata.Terrain.split(',')
  }
}

</script>
 <style scoped lang="scss">
.army-details{
    >.flip-card {
  background-color: transparent;
  width: 20vw;
  height: 50vh;
  perspective: 1000px;
  margin: 20px;
  cursor: pointer;
  animation: swipein 0.4s forwards;
  opacity: 0;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.3s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
  }
  .flip-card-front {
    background: red;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flip-card-back {
    background-color: #222;
    color: white;
    transform: rotateY(180deg);
    padding: 10px;

    h6 {
      margin: 0;
      color: rgba($color: #fff, $alpha: 0.5);
      border-bottom: 1px solid rgba($color: #fff, $alpha: 0.1);
      padding-bottom: 5px;
    }
    .traits {
      display: grid;
      grid-template-rows: 1fr auto;
      ul {
        margin: 0;
        padding: 0;
        li {
          margin: 0;
          font-size: 12px;
          justify-content: start;
          margin: 10px 0;
        list-style: none;

        }
        &:nth-child(1) {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          li {
            padding: 5px;
            background: red;
            transform:skewX(-20deg);
            color: #fff;
            margin: 5px;
            font-size: 10px;
            font-weight: bold;
            padding: 5px 8px;
            box-shadow: 0 2px 10px #000;
            border-radius: 2px;
          }
        }
      }
    }
  }
  img {
    position: absolute;
    height: 90%;
    border-radius: 10px;
     width: 99%;
  }
}

}
 ul {
        margin: 0;
        padding: 0;
        li {
          margin: 0;
          font-size: 12px;
          justify-content: start;
          margin: 10px 0;
        list-style: none;

        }
        &:nth-child(2) {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          li {
            padding: 5px;
            background: red;
            transform:skewX(-20deg);
            color: #fff;
            margin: 5px;
            font-size: 10px;
            font-weight: bold;
            padding: 5px 8px;
            box-shadow: 0 2px 10px #000;
            border-radius: 2px;
          }
        }
      }

@keyframes swipein {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}</style>
