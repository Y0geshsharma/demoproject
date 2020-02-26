<template>
<div class="container" >
  <div class="header" >
    <i class="el-icon-s-home" @click="gotohome" :style={color:color} style="font-size:40px;margin:20px 0px 0px 20px;cursor:pointer"></i>
      <p class="title" :style={color:color}>ADD {{this.ruleForm.Type}}</p ></div>
   <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-position="top"
    label-width="120px"
    class="armydata"
    style="margin:5%;background:transparent"
  >
    <el-row :gutter="50">
      <el-col :span="6">
        <el-form-item label="Kind" prop="Kind">
          <el-input v-model="ruleForm.Kind" style="transform: skewX(-20deg)"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item label="Description" prop="Description">
          <el-input type="textarea" v-model="ruleForm.Description" style="transform: skewX(-20deg)"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :span="6">
        <el-form-item label="Terraint" prop="Terraint">
          <el-input v-model="ruleForm.Terraint" style="transform: skewX(-20deg)"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="Agility" prop="Agility">
          <el-input-number
            v-model="ruleForm.Agility"
            :min="1"
            :max="10"
            style="transform: skewX(-20deg)"
          ></el-input-number>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="Strength" prop="Strength">
          <el-input-number
            v-model="ruleForm.Strength"
            :min="1"
            :max="10"
            style="transform: skewX(-20deg)"
          ></el-input-number>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="Intelligence" prop="Intelligence">
          <el-input-number
            v-model="ruleForm.Intelligence"
            :min="1"
            :max="10"
            style="transform: skewX(-20deg)"
          ></el-input-number>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :span="16">
        <el-form-item label="Image" prop="imageUrl" r>
          <el-upload
            style="border:dotted 1px white;display:grid;border-radius:5px;transform: skewX(-20deg);"
            ref="upload"

            multiple
            :limit="1"
            :on-exceed="remove"
            action
            :on-change="onchange"
            :auto-upload="false"
          >
            <i slot="trigger" style="color: white;font-size:50px " class="el-icon-plus temp"></i>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item props="Types" label="Types">
          <el-button
          :style={color:color}
          :disabled="true"
            style="transform: skewX(-20deg) ;padding:10px ;"
          >{{ruleForm.Type}}</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
<div class="mask"></div>
  </el-form>
   </div>
</template>

<script>
export default {
  data () {
    return {
      color: '',
      file: {},
      ruleForm: {
        Kind: '',
        Description: '',
        Strength: 0,
        Agility: 0,
        Intelligence: 0,
        Terraint: '',
        Type: '',
        imageUrl: ''
      },
      rules: {
        Kind: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 20, message: 'Length should be at least 3 and max 20 ', trigger: 'blur' }
        ],
        Description: [
          { required: true, message: 'Please select Activity zone', trigger: 'change' }
        ],
        Agility: [
          { required: true, message: 'Please pick a Strength', trigger: 'change' }
        ],
        Intelligence: [
          { required: true, message: 'Please pick a Intelligence', trigger: 'change' }
        ],
        Strength: [
          { required: true, message: 'Please pick a Strength', trigger: 'change' }
        ],
        Terraint: [
          { required: true, message: 'Please imput the tarrain', trigger: 'blur' },
          { min: 3, max: 20, message: 'Length should be at least 3 and max 20 ', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // image functions
    onImageSelected (event) {
      console.log('test')
      console.log(event)
    },
    onchange (file) {
      this.file = file
    },
    remove (fileList, file) {
      fileList = []
      this.file = []
    },
    gotohome () {
      this.$router.push('/')
    },
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.postformdata()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.remove()
    },
    checktype (_link) {
      console.log(_link)
      if (_link === 'adddroidarmy') {
        return true
      } else if (_link === 'addtroopersarmy') {
        return false
      } else {
        alert('sorry')
      }
    },
    async postformdata () {
      if (this.ruleForm === null) {
        alert('please add the values of the army')
      } else {
        let check = await this.checktype(this.$router.history.current.name)
        if (check) {
          this.ruleForm.imageUrl = '@/../assets/images/Troopers/' + this.file.name
          this.ruleForm.Type = 'clone trooper'
        } else if (!check) {
          this.ruleForm.imageUrl = '@/../assets/images/droidarmy/' + this.file.name
          this.ruleForm.Type = 'droid army'
        } else {
          this.ruleForm.imageUrl = '@/../assets/images/droidarmy/soliders.png'
        }
        this.$store.state.armyData = this.ruleForm
        await this.$store.dispatch('uploadArmy')
        this.$router.push('/')
      }
    }
  },
  created () {
    let route = this.$router.history.current.name
    if (route === 'adddroidarmy') {
      this.color = 'red'
      this.ruleForm.Type = 'Droid'
    } else if (route === 'addtroopersarmy') {
      this.color = 'blue'
      this.ruleForm.Type = 'Troppers'
    }
  }
}
</script>
<style lang="scss">
label {
  color: black;
  margin: 0 3% 0.25em;
  display: block;
  text-shadow:black 1px 0 1px;
  font-family: helvetica, sans-serif;
  font-weight: bold;
}
.header{
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
.title {
  align-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 0 0 20px white;
}
.absolute-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.container {
    @extend .absolute-fill;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background:transparent;
    z-index: 10;
    opacity: 1;

  }

</style>
