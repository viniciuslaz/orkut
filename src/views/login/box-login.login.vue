<template>
  <div class="box-login">
    <div class="content">
      <p class="title">Acesse o orkut com a sua conta</p>

      <div class="form">
        <div class="option">
          <p>E-mail:</p>
          <input type="text" v-model="dataLogin.email" />
        </div>

        <div class="option">
          <p>Senha:</p>
          <input type="password" v-model="dataLogin.password" />
        </div>

        <div class="option" style="margin: 0">
          <input type="checkbox" name="infos" />
          <p for="infos" class="save-information">Salvar as minhas informações neste computador</p>
        </div>

        <span class="advice">Não use em computadores públicos. [?]</span>

        <div class="btn-login">
          <RouterLink to="/"><button role="link">Entrar</button></RouterLink>
        </div>

        <a href="#" class="help">Não consegue acessar sua conta?</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "BoxLogin"
});

import { ref } from "vue";

const dataLogin = ref({
  email: "",
  password: ""
});
</script>

<style scoped>
.box-login {
  background-color: #fff;
  padding: 0.4rem;

  font-size: 0.95em;
}

.content {
  background-color: var(--light-blue);
  height: 100%;
  padding: 20px 30px;
}

.title {
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form .option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.option .save-information {
  user-select: none;
}

.form .option input[type="text"],
.form .option input[type="password"] {
  padding: 4px 0;
  flex: 1;
}

.advice {
  text-align: center;
  color: var(--light-purple);
  cursor: help;
  user-select: none;
}

.btn-login {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.btn-login button {
  width: 120px;
  padding: 2px 10px;
}

.help {
  text-align: center;
  font-weight: normal;
  color: var(--text-link);
  margin-top: 0.5rem;
}

.help:hover {
  text-decoration: none;
}
</style>
