<template>
  <div class="sobre">
    <h1>{{ titulo }}</h1>
    <p>
      O Blog é uma iniciativa em passar informação sobre o "mundo" de
      desenvolvimento de software. <u>Conhecer</u> é o ato de entender,
      compreender, apreender algo por meio da experiência ou do raciocínio.
    </p>
    <p1>"Conhecimento é poder"</p1>
    <p2>Francis Bacon (1561-1626)</p2>
    <p3>Autora do Blog: Amanda Oliveira</p3>
  </div>
</template>


<script>
export default {
  name: "InfoSobre",
  props: {
    titulo: String,
  },
};
</script>


<style scoped>
.sobre {
  background-color: white;
}

h1 {
  font-family: candara;
  position: absolute;
  top: 170px;
  left: 50px;
  right: 50px;
  color: rgb(170, 15, 111);
  text-align: center;
  font-size: calc(1em + 3vw);
}

p {
  font-family: candara;
  position: absolute;
  top: 280px;
  left: 50px;
  right: 50px;
  color: rgb(77, 63, 71);
  text-align: center;
  font-size: calc(1em + 2vw);
}

p1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  position: absolute;
  top: 600px;
  left: 50px;
  right: 50px;
  color: rgb(36, 33, 34);
  text-align: center;
  font-size: calc(1em + 3vw);
}

p2 {
  font-family: Georgia, "Times New Roman", Times, serif;
  position: absolute;
  top: 670px;
  left: 50px;
  right: 50px;
  color: rgb(80, 71, 76);
  text-align: center;
  font-size: calc(1em + 1vw);
}

p3 {
  font-family: candara;
  position: absolute;
  top: 800px;
  left: 20px;
  right: 20px;
  color: rgba(136, 14, 83, 0.767);
  text-align: center;
  font-size: calc(1em + 0.3vw);
}
</style>