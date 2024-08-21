<template>
  <div class="footer">
    <p>© {{ getYear }} Orkut</p>
    <span>-</span>
    <a href="#" class="link">Sobre o Orkut</a>
    <span>-</span>
    <a href="#" class="link">Centro de segurança</a>
    <span>-</span>
    <a href="#" class="link">Privacidade</a>
    <span>-</span>
    <a href="#" class="link">Termos</a>
  </div>
</template>

<script setup>
defineOptions({
  name: "footer-login"
});
1;
const getYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background-color: var(--footer-blue);
  margin-top: 0.5rem;
  padding: 0.3rem 0;

  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.footer p,
.footer a,
.footer span {
  margin: 0;
  font-size: 0.9rem;
}

.link {
  text-align: center;
  font-weight: normal;
  color: var(--text-link);
  margin-top: 0.5rem;
}

.link:hover {
  text-decoration: none;
}

@media screen and (max-width: 991px) {
  .footer {
    display: none;
  }
}
</style>
