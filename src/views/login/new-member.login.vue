<template>
  <div class="box-login">
    <div class="content">
      <p class="title">Ainda não é membro?</p>

      <a href="#" class="sign-up">Entrar já</a>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "BoxLogin"
});
</script>

<style scoped>
.box-login {
  background-color: #fff;
  padding: 5px;

  font-size: 0.95em;
}

.content {
  background-color: var(--light-blue);
  height: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 6px;
}

.title {
  text-align: center;
}

.sign-up {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--text-link);
}

.sign-up:hover {
  text-decoration: none;
}
</style>
