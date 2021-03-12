<template>
  <div class="container">
    <div class="card-product">
      <div class="small-container">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantty</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>sadwa</td>
            <td>awdas</td>
            <td>sawd</td>
          </tr>
        </table>
      </div>

      <button class="buy-buttons">Accept</button>
      <button class="buy-buttons" onClick="javascipt:location.reload()">
        Cancel
      </button>
    </div>
  </div>
</template>
<style>
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
  z-index: -1;
}
.card-product {
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0px 10px 5px #b2bec3;
  font-family: cursive;
  width: 60%;
  margin-top: 3rem;
  margin-left: 9rem;
}
.small-container {
  margin: 10px auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  color: rgb(25, 10, 10);
  justify-content: space-around;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
th {
  font-size: 18px;
}
td {
  color: #5d4954;
  font-size: 13px;
}
.buy-buttons {
  background-color: #f9ca24;
  border: none;
  padding: 5px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 10px;
  width: 15%;
  font-family: cursive;
  margin-left: 50px;
}
.buy-buttons:hover {
  box-shadow: 0px 5px 5px #b2bec3;
  color: #eb4d4b;
}
</style>
