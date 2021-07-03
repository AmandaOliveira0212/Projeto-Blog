<template>
  <div class="contato">
    <h1>{{ titulo }}</h1>

    <div>
      <form
        id="formulario"
        method="POST"
        action="https://formspree.io/f/mlealoln"
      >
        <label style="font-size: 25px"
          >Fale conosco. Preencha os campos abaixo para enviar sua
          mensagem.</label
        ><br />

        <label for="nome">Nome:</label><br />
        <input name="name" placeholder="Digite seu Nome" required /><br />

        <label for="sobrenome">Sobrenome:</label><br />
        <input
          name="lastaname"
          placeholder="Digite seu Sobrenome"
          required
        /><br />

        <label for="Email">E-mail:</label><br />
        <input
          type="email"
          name="_replyto"
          placeholder="Digite seu e-mail"
          required
        /><br />

        <label for="Telefone">Telefone:</label><br />
        <input phone="phone" placeholder="Digite seu telefone" /><br />

        <label for="Mensagem">Digite sua mensagem:</label><br />
        <textarea
          name="menssage"
          placeholder="Digite aqui sua mensagem"
        ></textarea
        ><br />

        <button type="submit">Enviar</button><br />
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "InfoContato",
  props: {
    titulo: String,
  },
};
</script>


<style scoped>
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

#formulario {
  margin: 0 auto;
  background-color: rgb(240, 212, 228);
  margin-top: 250px;
  border-radius: 10px;
  padding: 60px;
}

input {
  font-size: 0.9rem;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  width: 220px;
}

input:focus {
  outline: 0;
}

label {
  font-size: 20px;
  color: rgb(101, 24, 104);
  display: block;
  margin: 0 auto;
  text-align: center;
}

textarea {
  text-align: center;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  left: 20px;
  border-radius: 5px;
  width: 220px;
  padding: 10px;
}

textarea:focus {
  outline: 0;
}

button {
  text-align: center;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  width: 100px;
}
</style>