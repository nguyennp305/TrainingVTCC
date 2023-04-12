<template>
  <div class="register-web container-fluid">
    <div class="content">
      <div class="text" style="margin-bottom: 35px">Login Form</div>
      <div v-show="checkAccount === false" :class="{warning: checkAccount === false}">
        <div style="color: red"><b>Sai thông tin đăng nhập</b></div>
        <div style="color: red">Tên người dùng hoặc mật khẩu không hợp lệ</div>
      </div>
      <form action="#">
        <div class="field">
          <span
            ><b-icon
              icon="person-fill"
              variant="white"
              style="width: 30px; height: auto; margin-top: 10px"
            ></b-icon
          ></span>
          <input
            v-model="username"
            type="text"
            placeholder="Email Id"
            required
          />
        </div>

        <div class="field">
          <span
            ><b-icon
              icon="lock-fill"
              variant="white"
              style="width: 30px; height: auto; margin-top: 10px"
            ></b-icon
          ></span>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button @click.prevent="handleLogin">Log in</button>
        <div style="color: blue; cursor: pointer;">Quên mật khẩu?</div>
        <div class="or">Or</div>
        <div class="icon-button">
          <span class="facebook"
            ><b-icon
              icon="facebook"
              variant="primary"
              style="width: 25px; height: 25px; margin-right: 5px"
            ></b-icon>
            Facebook</span
          >

          <span class="facebook"
            ><b-icon
              icon="google"
              variant="white"
              style="width: 25px; height: 25px; margin-right: 5px"
            ></b-icon>
            Google</span
          >
        </div>
        <button @click.prevent="LinkRouterSignUp">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: '',
      checkAccount: true,
      // dataList: datalist,
    }
  },

  methods: {
    LinkRouterSignUp() {
      this.$router.push('/register/RegisterWeb');
    },
    async handleLogin() {
      try {
        // Send a POST request to the login API endpoint

        const response =await axios.post('http://localhost:4000/users/login', {
          username: this.username,
          password: this.password,
        })

        // Handle the response from the server
        console.log(response.data)
        this.checkAccount = true;
        console.log(this.checkAccount)

        this.$router.push('/PageWebTest');
      } catch (error) {
        this.checkAccount = false;
        console.log(this.checkAccount)
        console.error(error)
      }
    },
    
  },
}
</script>

<style lang="scss" scoped>
.register-web {
  display: flex;
  background: url('https://images.wallpaperscraft.com/image/single/starry_sky_silhouette_swing_118434_1920x1080.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.content {
  width: 330px;
  border-radius: 10px;
  padding: 40px 30px;
  margin-top: 100px;
  box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
  .text {
    font-size: 25px;
    font-weight: 600;
    color: rgb(247, 233, 233);
  }
  .field {
    height: 50px;
    width: 100%;
    display: flex;
    position: relative;
    input {
      height: 100%;
      width: 100%;
      padding-left: 45px;
      font-size: 18px;
      outline: none;
      border: none;
      color: #e0d2d2;
      border: 1px solid rgba(255, 255, 255, 0.438);
      border-radius: 8px;
      background: rgba(105, 105, 105, 0);
    }
    input:hover {
      background-color: #babecc8c;
    }
    input::placeholder {
      color: #e0d2d2a6;
    }
    span {
      position: absolute;
      width: 50px;
      line-height: 50px;
      color: #ffffff;
    }
  }
  .field:nth-child(2) {
    margin-top: 20px;
  }
  .or {
    color: rgba(255, 255, 255, 0.733);
    margin-top: 9px;
  }
}
button {
  margin: 25px 0 0 0;
  width: 100%;
  height: 50px;
  color: rgb(238, 226, 226);
  font-size: 18px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.438);
  border-radius: 8px;
  background: #20b2aa;
  margin-top: 40px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
}
.icon-button {
  margin-top: 15px;
  display: flex;
  position: relative;
  span {
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgba(244, 247, 250, 0.795);
    border-radius: 5px;
    line-height: 30px;
    background: #20b2aa;
    backdrop-filter: blur(10px);
  }
  span.facebook {
    margin-right: 17px;
    display: flex;
    justify-content: center;
  }
}
button:hover,
.icon-button span:hover {
  background-color: #babecc8c;
}
.warning {
  border: 2px solid #dd3c10;
  background-color: #ffebe8;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
