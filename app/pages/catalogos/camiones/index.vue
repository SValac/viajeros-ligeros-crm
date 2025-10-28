<script setup lang="ts">
const appStore = useAppStore();

appStore.pageTitle = 'Catálogo de Camiones';
appStore.pageDescription = 'Administra y supervisa todos los camiones registrados en el sistema.';
appStore.showAddButton = true;
</script>

<template>
  <div>
    <h1>Catálogo de Camiones</h1>
  </div>
</template>

<style scoped>

</style>
