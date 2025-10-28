<script setup lang="ts">
const appStore = useAppStore();

appStore.pageTitle = 'Editar Camión';
appStore.pageDescription = 'Modifica la información del camión seleccionado en el catálogo.';

const route = useRoute();
const camionId = route.params.id as string;
</script>

<template>
  <div>
    {{ camionId }}
  </div>
</template>

<style scoped>

</style>
