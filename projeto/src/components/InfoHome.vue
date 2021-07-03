<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Aqui você encontra alguns dos diversos sites oficiais para auxiliar no
      desenvolvimento de software
    </p>
    <img src="../assets/fundo.jpg" alt="fundo" />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!--Style Home-->
<style>
img {
  background-repeat: no-repeat;
  width: 100%;
}

.hello h1 {
  font-family: candara;
  position: absolute;
  top: 170px;
  left: 50px;
  right: 50px;
  background-color: rgba(77, 75, 75, 0.7);
  color: #fff;
  text-align: center;
  font-size: calc(1em + 3vw);
}

p {
  font-family: candara;
  font-size: 20px;
  position: absolute;
  top: 400px;
  left: 50px;
  right: 50px;
  color: rgb(87, 78, 84);
  text-align: center;
  font-size: calc(1em + 2vw);
}
</style>