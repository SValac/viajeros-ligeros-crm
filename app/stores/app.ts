export const useAppStore = defineStore('title', () => {
  const title = ref('Viajeros Ligeros CRM');
  const pageTitle = ref('Control de Viajes');
  const pageDescription = ref('Administra y supervisa todos los viajes realizados por tus clientes de manera eficiente.');
  const showAddButton = ref(false);

  return { title, pageTitle, pageDescription, showAddButton };
});
