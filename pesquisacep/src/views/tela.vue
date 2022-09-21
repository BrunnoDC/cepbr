<script>
import axios from "axios";
export default {
  data() {
    return {
      cep: "",
      endereco: {},
    };
  },
  methods: {
    async buscar() {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;
      const res = await axios.get(url);
      this.endereco = res.data;
    },
  },
};
</script>

<template>
  <header class="corpo">
    <h1>Pesquisar CEP</h1>
    <form @submit.prevent="buscar">
    <input type="text" v-model="cep" class="cep"  placeholder="cep" />
    <button class="botao">Pesquisar</button>
    </form>
  </header>
</template>
<style>
h1 {
  color: green;
}
body {
  background-color: black;
}
.corpo {
  justify-content: center;
  align-items: center;
  background-color: gray;
  width: 500px;
  height: 300px;
  margin: 0 0 0 35%;
  border-radius: 12px;
  text-align: center;
}
.cep {
  height: 20px;
}
.botao {
  width: 100px;
  height: 30px;
  margin: 0 0 0 5px;
  background-color: green;
  border-radius: 12px;
}
</style>
