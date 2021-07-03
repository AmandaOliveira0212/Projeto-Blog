<template>
  <div class="sobre">
    <h1>"O que você quer aprender?"</h1>
    <div id="container">
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
      <img id="icon-html" src="../assets/html.png" alt="icon-html">
      <figcaption>Html</figcaption></a>

      <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
      <img id="icon-css" src="../assets/css.png" alt="icon-css"/>
      <figcaption>CSS</figcaption></a>

      <a href="https://getbootstrap.com/">
      <img id="icon-bootstrap" src="../assets/bootstrap.png" alt="icon-bootstrap"/>
      <figcaption>Bootstrap</figcaption></a>

      <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
      <img id="icon-javascript" src="../assets/javascript.png" alt="icon-javascript"/>
      <figcaption>Javascript</figcaption></a>

      <a href="https://www.w3schools.com/jquERy/jquery_intro.asp">
      <img id="icon-jquery" src="../assets/jquery.png" alt="icon-jquery"/>
      <figcaption>JQuery</figcaption></a>

      <a href="https://angular.io/docs">
      <img id="icon-angular" src="../assets/angular.png" alt="icon-angular"/>
      <figcaption>Angular</figcaption></a>

      <a href="https://br.vuejs.org/v2/guide/index.html">
      <img id="icon-vue" src="../assets/vue.png" alt="icon-vue"/>
      <figcaption>Vue.Js</figcaption></a>

      <a href="https://www.java.com/pt-BR/about/whatis_java.jsp">
      <img id="icon-java" src="../assets/java.png" alt="icon-java"/>
      <figcaption>Java</figcaption></a>

      <a href="https://www.php.net/manual/pt_BR/intro-whatis.php">
      <img id="icon-php" src="../assets/php.png" alt="icon-php"/>
      <figcaption>Php</figcaption></a>

      <a href="https://guides.rubyonrails.org/getting_started.html">
      <img id="icon-ruby" src="../assets/ruby.png" alt="icon-ruby"/>
      <figcaption>Ruby on Rails</figcaption></a>

      <a href="https://www.atlassian.com/br/git/tutorials/what-is-git">
      <img id="icon-git" src="../assets/git.png" alt="icon-git"/>
      <figcaption>Git</figcaption></a>

      <a href="https://docs.python.org/3/">
      <img id="icon-python" src="../assets/python.png" alt="icon-python"/>
      <figcaption>Python</figcaption></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aprender"
};
</script>

<style scoped>
h1 {
  font-family: candara;
  position: absolute;
  top: 150px;
  left: 50px;
  right: 30px;
  color: rgb(170, 15, 111);
  text-align: center;
  font-size: calc(1em + 3vw);
}

#container img {
  height: 60px;
  width: 66px;
  margin: 5px;
  margin-top: 60px;
}

#container {
  columns: 4;
  text-align: center;
  display: block;
  margin-top: 180px;
}

#container figcaption {
  font-size: 12px;
  color: rgb(197, 22, 95);
}
#container a {
  text-decoration: none;
}
</style>