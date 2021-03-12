<template>
  <div id="login">
    <div class="container">
      <div class="forms-container">
        <div class="singin-sigup">
          <form action="addData" class="sign-in-form">
            <h2 class="title">Sing in</h2>
            <div class="input-field">
              <i class="fa fa-user"></i>
              <input type="text" name="" id="txt" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fa fa-envelope"></i>
              <input type="text" name="" id="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fa fa-lock"></i>
              <input type="password" name="" id="pass" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Login"
              class="btn soild"
              @click="appData()"
            />
            <p class="social-text">Or Sign in With Social platforms</p>
            <div class="social-media">
              <a href="" class="social-icon"
                ><i class="fa fa-facebook-f"></i
              ></a>
              <a href="" class="social-icon"><i class="fa fa-google"></i></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {db} from '~/plugins/firebaseConfig.js'
// import firebase from 'firebase/app'
export default {
  data: function() {
    return {
      txt: "",
      email: "",
      password: ""
    };
  },
  methods: {
    addData() {
      // var data = {
      //   txt: this.txt,
      //   email: this.email,
      //   password: this.password,
      // };
      // db.collection("MyForm")
      //   .doc("formdata")
      //   .set(data)
      //   .then(function () {
      //     console.log("Document successfully written! -> MyForm");
      //   })
      //   .catch(function (error) {
      //     console.error("Error writing document: ", error);
      //   });
      // // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      // var dataText = {
      //   txt: this.txt,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // };
      // db.collection("MyText")
      //   .doc()
      //   .set(dataText)
      //   .then(function () {
      //     console.log("Document successfully written! -> MyText");
      //   })
      //   .catch(function (error) {
      //     console.error("Error writing document: ", error);
      //   });
    },
    reset() {}
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.login,
input {
  font-family: "Acme", sans-serif;
  font-weight: 200;
}
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
}
.container:before {
  content: "";
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background: linear-gradient(-45deg, rgb(255, 167, 4), rgb(255, 255, 255));
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
}
.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.singin-sigup {
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
form.sign-in-form {
  z-index: 2;
}
form.sign-up-form {
  z-index: 1;
  opacity: 0;
}
.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
  font-family: "Acme", sans-serif;
}
.input-field {
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
}
.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.1rem;
}
.input-field input {
  background: none;
  outline: none;
  border: none;
  font-size: 1.1rem;
  color: #333;
}
.btn {
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 48px;
  cursor: pointer;
  background-color: #5995fd;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;
}
.btn:hover {
  background-color: #4d84e3;
}
.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
  font-family: "Acme", sans-serif;
}
.social-media {
  display: flex;
  justify-content: center;
}
.social-icon {
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  border-radius: 50%;
}
.panels-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}
.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}
.panel .content {
  color: #fff;
}
.btn.trans {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  widows: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}
.right-panel .content {
  transform: translateX(800px);
}
.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}
@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100hv;
  }
  .container::before {
    width: 1500px;
    height: 1500px;
    left: 30%;
    bottom: 60%;
    transform: translatex(-50%);
    right: initial;
    top: initial;
  }
  .singin-sigup {
    width: 100%;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
  }
}
</style>
