<script setup lang="ts">
const titleStore = useTitleStore();
</script>

<template>
  <UDashboardGroup>
    <UDashboardPanel
      id="inbox-1"
      resizable
      :ui="{
        body: 'sm:p-2',
      }"
    >
      <template #header>
        <AppNavbar />
      </template>
      <template #body>
        <div class="flex min-h-full">
          <AppSidebar />
          <div class="flex-1">
            <UPage>
              <UPageHeader
                :title="titleStore.pageTitle"
                description="Administra y supervisa todos los viajes realizados por tus clientes de manera eficiente."
                class="py-2 p-2"
              />
              <UPageBody class="px-2 sm:px-4 lg:px-6">
                <slot />
              </UPageBody>
            </UPage>
          </div>
        </div>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<style scoped>

</style>
