<template>
  <div id="nav">
    <router-link to="/">Início</router-link> |
    <router-link to="/aprender">Aprender</router-link> |
    <router-link to="/sobre">Sobre</router-link> |
    <router-link to="/contato">Contato</router-link>
  </div>
  <router-view />
</template>

<style>
* {
  font-family: candara;
  padding: 0;
  margin: 0;
}

#nav {
  background-color: purple;
  padding: 25px;
  text-align: center;
}

#nav a {
  color: white;
  text-decoration: none;
  margin: 2px;
  font-size: 20px;
}
</style>