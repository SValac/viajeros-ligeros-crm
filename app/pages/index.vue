<script setup lang="ts">
const appStore = useAppStore();
appStore.pageTitle = 'Control de Viajes';
appStore.pageDescription = 'Administra y supervisa todos los viajes realizados por tus clientes de manera eficiente.';
</script>

<template>
  <main>
    <DashboardTable />
  </main>
</template>

<style scoped>

</style>
