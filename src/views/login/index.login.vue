<template>
  <div class="login">
    <div class="container">
      <div class="content">
        <aboutLogin id="aboutLogin" />

        <div class="user-information">
          <boxLogin />

          <newMember />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "IndexLogin"
});

import aboutLogin from "./about.login.vue";
import boxLogin from "./box-login.login.vue";
import newMember from "./new-member.login.vue";
</script>

<style scoped>
.login {
  background-color: var(--light-blue);
  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 10px;
}

.user-information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media screen and (max-width: 991px) {
  #aboutLogin {
    display: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
