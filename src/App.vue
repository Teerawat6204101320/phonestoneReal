<template>
  <div id="app">
    <div id="nav">
      <body>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fa fa-bars"></i>
          </label>
          <div class="logo">Phone <span class="text-yellow">Stone</span></div>
          <div class="basket-btn">
            <a class="basket-bt" href="/basket"
              ><i class="fa fa-shopping-basket"> </i
            ></a>
          </div>
          <ul class="nav-link">
            <li><a href="/">Phone</a></li>
            <li><a href="/login">Login</a></li>
            <li>
              <a class="btn-basket" href="/basket"
                ><i class="fa fa-shopping-basket"> </i
              ></a>
            </li>
          </ul>
        </nav>
      </body>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  font-family: "Acme", sans-serif;
}
nav {
  background-color: rgb(54, 53, 53);
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  height: 80px;
  width: 100%;
  margin-left: 0px;
}
.logo {
  color: white;
  font-size: 23px;
  line-height: 50px;
  padding: 0 100px;
  font-weight: bold;
}
.text-yellow {
  background-color: rgb(255, 167, 4);
  color: black;
  padding: 2px;
  border-radius: 2px;
}
.search-box {
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 15px;
  padding: 9px 3px;
}

.search-btn {
  color: black;
  background: none;
  padding: 7px 13px;
  border-radius: 15px;
  font-size: 15px;
}
.search-txt {
  font-family: "Acme", sans-serif;
  border: none;
  background: none;
  outline: none;
  width: 240px;
  padding: 0;
  color: black;
  font-size: 15px;
}
.btn-basket {
  font-size: 15px;
}
nav ul {
  float: right;
  margin-right: 120px;
  text-transform: uppercase;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 15px;
}
nav ul li a {
  color: white;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 2px;
  text-decoration: none;
}
a:hover {
  color: rgb(255, 167, 4);
}
.checkbtn {
  font-size: 30px;
  color: rgb(255, 167, 4);
  display: none;
  margin-right: -70px;
}
#check {
  display: none;
}
@media screen and (max-width: 2560px) {
  .basket-bt {
    display: none;
  }
}
@media screen and (max-width: 1088px) {
  .search-txt {
    width: 150px;
  }
  .basket-bt {
    display: none;
  }
}
@media screen and (max-width: 966px) {
  label.logo {
    font-size: 20px;
    padding-left: 50px;
  }
  nav ul {
    margin-right: -1px;
  }
  nav ul li a {
    font-size: 13px;
    padding: 5px 1px;
  }
  .search-txt {
    width: 150px;
  }
  .basket-bt {
    display: none;
  }
}
@media screen and (max-width: 797px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
    margin-left: -50px;
  }
  .checkbtn {
    display: block;
  }
  nav {
    display: flex;
    justify-content: space-around;
  }
  ul {
    position: fixed;
    width: 70%;
    height: 100vh;
    background-color: rgb(54, 53, 53);
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.6s;
    z-index: 6;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 15px;
  }
  #check:checked ~ ul {
    left: 0;
  }
  .search-box {
    margin-top: 40px;
  }
  .search-txt {
    width: 200px;
  }
  .basket-btn {
    margin-top: px;
    margin-left: -80px;
  }
  .basket-bt {
    display: inline;
    color: rgb(255, 167, 4);
    font-size: 20px;
    margin-top: -40px;
  }
}
@media screen and (max-width: 425px) {
  label.logo {
    font-size: 25px;
    padding-left: 13px;
    float: left;
  }
  .basket-bt {
    font-size: 20px;
  }
}
@media screen and (max-width: 320px) {
  nav {
    width: 120%;
  }
}
</style>
