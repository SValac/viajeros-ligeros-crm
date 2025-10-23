export const useTitleStore = defineStore('title', () => {
  const title = ref('Viajeros Ligeros CRM');
  const pageTitle = ref('Control de Viajes');

  return { title, pageTitle };
});
