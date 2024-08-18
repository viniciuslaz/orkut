<template>
  <div class="box-login">
    <div class="content">
      <p class="title">Acesse o orkut com a sua conta</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxLogin"
};
</script>

<style scoped>
.box-login {
  background-color: #fff;
  padding: 5px;
  height: 300px;

  font-size: 0.95em;
}

.content {
  background-color: var(--light-blue);
  height: 100%;
  padding: 20px;
}

.title {
  text-align: center;
}
</style>
