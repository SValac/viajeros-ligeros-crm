<script setup lang="ts">
const appStore = useAppStore();
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
              <div
                class="flex flex-col md:flex-row items-center justify-center"
              >
                <UPageHeader
                  :title="appStore.pageTitle"
                  :description="appStore.pageDescription"
                  class="flex-1 py-2 p-2"
                />
                <UButton
                  v-if="appStore.showAddButton"
                  label="Nuevo"
                  class="flex w-fit h-fit"
                  to="/catalogos/camiones/new"
                />
              </div>
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

<style scoped></style>
