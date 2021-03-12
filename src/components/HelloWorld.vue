<template>
  <div class="hello">
    <!-- slide Start -->

    <div class="slider">
      <div class="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />

        <!-- slide image -->
        <div class="slide first">
          <img
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/157431671_2900951636807190_7979814492035256168_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFRBHK63qgP00uBax3vJkTvhnv46BXJKSqGe_joFckpKiC987-8Ia6aXWdomBXMW0-f6FmFNAznIDTcXWW_-fFu&_nc_ohc=-vNg4u2tofAAX_V4d8u&_nc_oc=AQnNrQCo6DoQUEBillkoy1Prp6UbEu2raL8RRDSKzgQAgL-Zro2kZmYry3GO2hQ7uns&_nc_ht=scontent.fbkk13-2.fna&oh=ee24f9db08d68c86a42af56d957542bf&oe=606E1911"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/157742524_2900994010136286_8551377207479900448_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF3W8fKidh4pdAIvdWRECR2YQhuBGRbO5ZhCG4EZFs7lipKna7YuO_eKJu6XpKb2FzlEdUd5jvw-jxCOMb-gorD&_nc_ohc=VaW_lEftH3UAX_jFDLu&_nc_ht=scontent.fbkk12-1.fna&oh=c397823d3af607fcc343023e4b79c0d2&oe=606F8D71"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/157222503_2900994203469600_2501216965730954207_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEvwhf6QanV3LcHyqqA5X7_insvnTfzCMmKey-dN_MIyYV7U0-xKlT1V2vJy9AH7nsLZp_ijV18O7YuwYwAXjNm&_nc_ohc=Vqci8rqGq-EAX9UYMY7&_nc_ht=scontent.fbkk12-1.fna&oh=3efdfdd3a29857458ae2458c81031928&oe=606CFB64"
            alt=""
          />
        </div>
        <!-- manual -->
        <div class="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
        </div>
      </div>
    </div>

    <!-- SAMSUNG product start -->
    <div class="container">
      <div class="product" v-for="(items, index) in samSung" :key="index">
        <div class="product-card">
          <h2 class="name">{{ items.name }}</h2>
          <h3 class="version">{{ items.version }}</h3>
          <span class="price">฿ {{ items.price }}</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" :src="items.img" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img :src="items.img" alt="" />
            </div>
            <div class="info">
              <h2>
                {{ items.name }}<br /><span>{{ items.version }}</span>
              </h2>
              <p>{{ items.about1 }}</p>
              <p>{{ items.about2 }}</p>
              <p>{{ items.about3 }}</p>
              <p>{{ items.about4 }}</p>
              <p>{{ items.about5 }}</p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ {{ items.price }}</span>
              <a href="" class="add-cart-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>

      <!-- IPHONE product start -->
      <div class="product" v-for="(items, index) in iPhone" :key="index.id">
        <div class="product-card">
          <h2 class="name">{{ items.name }}</h2>
          <h3 class="version">{{ items.version }}</h3>
          <span class="price">฿ {{ items.price }}</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" :src="items.img" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img :src="items.img" alt="" />
            </div>
            <div class="info">
              <h2>
                {{ items.name }}<br /><span>{{ items.version }}</span>
              </h2>
              <p>{{ items.about1 }}</p>
              <p>{{ items.about2 }}</p>
              <p>{{ items.about3 }}</p>
              <p>{{ items.about4 }}</p>
              <p>{{ items.about5 }}</p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ {{ items.price }}</span>
              <a href="" class="add-cart-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>

      <!-- OPPO product start -->
      <div class="product" v-for="(items1, index1) in opPo" :key="index1">
        <div class="product-card">
          <h2 class="name">{{ items1.name }}</h2>
          <h3 class="version">{{ items1.version }}</h3>
          <span class="price">฿ {{ items1.price }}</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" :src="items1.img" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img :src="items1.img" alt="" />
            </div>
            <div class="info">
              <h2>
                {{ items1.name }}<br /><span>{{ items1.version }}</span>
              </h2>
              <p>{{ items1.about1 }}</p>
              <p>{{ items1.about2 }}</p>
              <p>{{ items1.about3 }}</p>
              <p>{{ items1.about4 }}</p>
              <p>{{ items1.about5 }}</p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ {{ items1.price }}</span>
              <a href="" class="add-cart-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>

      <!-- XIAOMI product start -->
      <div class="product" v-for="(items, index2) in xiaoMi" :key="index2">
        <div class="product-card">
          <h2 class="name">{{ items.name }}</h2>
          <h3 class="version">{{ items.version }}</h3>
          <span class="price">฿ {{ items.price }}</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" :src="items.img" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img :src="items.img" alt="" />
            </div>
            <div class="info">
              <h2>
                {{ items.name }}<br /><span>{{ items.version }}</span>
              </h2>
              <p>{{ items.about1 }}</p>
              <p>{{ items.about2 }}</p>
              <p>{{ items.about3 }}</p>
              <p>{{ items.about4 }}</p>
              <p>{{ items.about5 }}</p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ {{ items.price }}</span>
              <a href="" class="add-cart-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <h5>PHONESTONE</h5>
        <p>สามารถติดต่อสอบถามกับพวกเราได้ที่</p>
        <ul class="socials">
          <li>
            <a href=""><i class="fa fa-facebook-square"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-twitter-square"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-youtube-square"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-google-plus"></i></a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>
          copyright &copy;2021 codeOpacity. designed by
          <span>Group Phone stone</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(["samSung", "iPhone", "opPo", "xiaoMi"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100&family=Poppins:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
.hello {
  margin: 0;
  padding: 0px;
  font-family: "Poppins", sans-serif;
}

.slider {
  width: 100%;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
}
.slides {
  width: 500%;
  height: 500px;
  display: flex;
}
.slides input {
  display: none;
}
.slide {
  width: 20%;
  transition: 2s;
}
.slide img {
  width: 100%;
  height: 600px;
}
.navigation-manual {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 70px;
}
.manual-btn {
  border: 2px solid white;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}
.manual-btn:not(:last-child) {
  margin-right: 40px;
}
.manual-btn:hover {
  background: white;
}
#radio1:checked ~ .first {
  margin-left: 0;
}
#radio2:checked ~ .first {
  margin-left: -20%;
}
#radio3:checked ~ .first {
  margin-left: -40%;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 5%;
}
.product .product-card {
  z-index: 1;
  background: #1d212b;
  position: relative;
  width: 300px;
  height: 450px;
  margin: 40px;
  border-radius: 10px;
}
.product .product-card:before {
  content: "";
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.product .product-card .product-img {
  z-index: 2;
  position: absolute;
  max-width: 250px;
  height: 250px;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.product .product-card .name {
  z-index: 3;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 110px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.product .product-card .version {
  z-index: 3;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 85px;
  letter-spacing: 1px;
  font-family: "Kanit", sans-serif;
}
.product .product-card .price {
  z-index: 3;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 60px;
  font-size: 15px;
  font-weight: 600;
}
.product .product-card .popup-btn {
  z-index: 3;
  color: white;
  background: #555;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
}
.product .popup-view {
  z-index: 3;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}
.product .popup-view.active {
  opacity: 1;
  visibility: visible;
}
.product .popup-card {
  position: relative;
  display: flex;
  width: 800px;
  height: 500px;
  margin: 20px;
}
.product .popup-card .product-img {
  z-index: 3;
  background: #1d212b;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 90%;
  transform: translateY(25px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.product .popup-card .product-img img {
  z-index: 3;
  position: relative;
  width: 270px;
  left: 0px;
  border-radius: 5px;
}
.product .popup-card .info {
  z-index: 3;
  background: rgb(255, 167, 4);
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 10px;
}
.product .popup-card .close-btn {
  color: #555;
  z-index: 4;
  position: absolute;
  right: 0;
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
}
.product .popup-card .info h2 {
  font-size: 30px;
  line-height: 20px;
  margin: 10px;
  font-family: "Kanit", sans-serif;
}
.product .popup-card .info h2 span {
  font-size: 15px;
  text-transform: none;
  letter-spacing: 2px;
}
.product .popup-card .info p {
  font-size: 12px;
  margin: 3px;
  color: black;
  font-weight: bold;
  font-family: "Kanit", sans-serif;
}
.select-con {
  display: flex;
}
.select {
  margin: 0 10px;
  width: 100px;
  height: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  border-radius: 5px;
  font-weight: bold;
}
.text {
  font-size: 15px;
  font-weight: 900;
}
.red {
  background-color: red;
  color: white;
}
.blue {
  background-color: blue;
  color: white;
}
.black {
  background-color: black;
  color: white;
}
.product .popup-card .info .price {
  font-size: 45px;
  font-weight: bold;
  margin: 10px;
}
.product .popup-card .info .add-cart-btn {
  color: #fff;
  background: #009dd2;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin: 10px;
  padding: 10px 50px;
  border-radius: 20px;
}
.footer {
  position: relative;
  width: 100%;
  height: 32%;
  background: rgb(54, 53, 53);
  color: white;
  text-align: center;
  margin-top: 1rem;
  scrollbar-shadow-color: 0px 10 px 5px black;
  padding: 2em;
  font-family: "Kanit", sans-serif;
}
.footer h5 {
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 3rem;
}
.footer p {
  max-width: 500px;
  margin: 10px auto;
  line-height: 28px;
  font-size: 14px;
}
.socials {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.socials i {
  margin: 0 10px;
}
.socials a {
  color: #fff;
}
.socials a i {
  transition: color 0.4s;
}
.socials a:hover i {
  color: rgb(255, 167, 4);
}
.footer-bottom {
  background: rgb(27, 27, 27);
  width: 100vw;
  padding: 20px 0;
  text-align: center;
  color: #fff;
}
.footer-bottom p {
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
}
.footer-bottom span {
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
}
@media screen and (max-width: 2560px) {
  .slidershow {
    width: 900px;
  }
  .middle {
    top: 45%;
  }
}
@media screen and (max-width: 1088px) {
  .slidershow {
    width: 900px;
  }
  .middle {
    top: 45%;
  }
  .container {
    margin-top: 50%;
  }
}
@media screen and (max-width: 966px) {
  .slidershow {
    width: 700px;
  }
  .container {
    margin-top: 60%;
  }
}
@media screen and (max-width: 770px) {
  .slidershow {
    width: 600px;
    height: 300px;
  }
  .container {
    margin-top: 10%;
  }
  .product .popup-card {
    flex-direction: column;
    width: 500px;
    height: auto;
  }
  .product .popup-card .product-img {
    z-index: 4;
    width: 100%;
    height: 200px;
    transform: translateY(0);
    border-bottom-left-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .product .popup-card .product-img img {
    left: inherit;
    width: 35%;
  }
  .product .popup-card .info {
    width: 100%;
    height: auto;
    padding: 20px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .product .popup-card .info h2 {
    margin: 20px 5px 5px 5px;
    font-size: 25px;
  }
  .product .popup-card .info h2 span {
    font-size: 10px;
  }
  .product .popup-card .info p {
    margin: 5px;
    font-size: 13px;
  }
  .product .popup-card .info .price {
    margin: 5px;
    font-size: 25px;
  }
  .product .popup-card .info .add-cart-btn {
    margin: 5px auto;
    padding: 5px 40px;
    font-size: 14px;
  }
  .product .popup-card .close-btn {
    z-index: 5;
    color: white;
  }
  .container {
    margin-top: 70%;
  }
}
@media screen and (max-width: 500px) {
  .middle {
    transform: translate(-50%, -60%);
  }
  .bar {
    width: 25px;
    height: 10px;
  }
  .container {
    margin-top: 90%;
  }
}
@media screen and (max-width: 322px) {
  .slidershow {
    width: 600px;
    height: 200px;
  }
  .middle {
    transform: translate(-37%, -70%);
  }
  .container {
    margin-left: 15%;
  }
}
</style>
