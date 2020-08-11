<template>
  <div>
    <site-header />
    <main class="py-4">
        <router-view />
    </main>
  </div>
</template>
<script>
import SiteHeader from '@/components/header.vue';

export default {
  components: {
    SiteHeader,
  }
}
</script>
