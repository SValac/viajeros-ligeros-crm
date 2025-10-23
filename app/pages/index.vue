<script setup lang="ts">
const titleStore = useTitleStore();
titleStore.pageTitle = 'Control de Viajes';
</script>

<template>
  <main>
    <DashboardTable />
  </main>
</template>

<style scoped>

</style>
