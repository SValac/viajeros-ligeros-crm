<script setup lang="ts">
import type { Camion } from '@@/types/catalogos';
import type { FormSubmitEvent } from '@nuxt/ui';

import { CamionSchema } from '@@/types/catalogos';

const appStore = useAppStore();

appStore.pageTitle = 'Nuevo Camión';
appStore.pageDescription = 'Crea un nuevo camión para agregarlo al catálogo de camiones.';
appStore.showAddButton = false;

const state = ref<Camion>({
  plate: '',
  brand: '',
  capacity: 0,
  model: new Date().getFullYear(),
  chofer1Id: '',
  chofer2Id: undefined,
});

const driversList = [
  { label: 'Juan Pérez', value: '1' },
  { label: 'María Gómez', value: '2' },
  { label: 'Carlos Rodríguez', value: '3' },
];

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Camion>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' });
  console.log(event.data);
}
</script>

<template>
  <div>
    <UForm
      :state="state"
      :schema="CamionSchema"
      @submit="onSubmit"
    >
      <u-form-field
        label="Placa"
        name="plate"
      >
        <u-input v-model="state.plate" />
      </u-form-field>
      <u-form-field
        label="Marca"
        name="brand"
      >
        <u-input v-model="state.brand" />
      </u-form-field>
      <u-form-field
        label="Capacidad"
        name="capacity"
      >
        <u-input v-model="state.capacity" type="number" />
      </u-form-field>
      <u-form-field
        label="Año"
        name="model"
      >
        <u-input v-model="state.model" type="number" />
      </u-form-field>
      <u-form-field
        label="Chofer Principal"
        name="chofer1Id"
      >
        <u-select
          v-model="state.chofer1Id"
          :items="driversList"
          class="w-48"
        />
      </u-form-field>
      <u-form-field
        label="Chofer Secundario"
        name="chofer2Id"
      >
        <u-select
          v-model="state.chofer2Id"
          :items="driversList"
          class="w-48"
        />
      </u-form-field>
      <u-button
        type="submit"
        label="Guardar Camión"
        class="mt-4"
      />
    </UForm>
  </div>
</template>

<style scoped>

</style>
