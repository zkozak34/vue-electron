<template>
  <Layout>
    <router-view v-slot="{ Component, route }">
      <Transition appear mode="out-in" v-bind="transitions">
        <div :key="route.name?.toString()">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
  </Layout>
</template>

<script setup lang="ts">
// imports
import Layout from '@/layout/default.vue'
// interfaces & types

// constants
const transitions = {
  'enter-active-class': 'transition ease-in-out duration-300',
  'leave-active-class': 'transition ease-in-out duration-300',
  'enter-from-class': 'opacity-0',
  'leave-to-class': 'opacity-0'
}
// composable

// props

// defineEmits

// states (refs and reactives)

// computed

// watchers

// lifecycles

// methods
</script>

<style lang="postcss" scoped></style>
