<template>
  <div class="about">
    <img src="../../assets/orkut_logo.webp" alt="Orkut Logo." loading="lazy" />

    <p class="information">
      <span class="emphasis">Conecta-se</span> aos seus amigos e familiares usando recados e
      mensagens instantâneas
    </p>
    <p class="information">
      <span class="emphasis">Conheça</span> novas pessoas através de amigos de seus amigos e
      comunidades
    </p>
    <p class="information">
      <span class="emphasis">Compartilhe</span> seus vídeos, fotos e paixões em um só lugar
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutView"
};
</script>

<style scoped>
.about {
  background-color: #fff;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.about img {
  max-width: 100%;
  max-height: 120px;
  margin-bottom: 1rem;
}

.information {
  font-size: 0.95em;
  text-align: center;
}

.emphasis {
  color: var(--text-pink);
  font-weight: bolder;
}
</style>
