<template>
  <div>
    <header>
      <HeaderWeb :infomation="infomation" />
    </header>
    <nuxt />
    <FooterWeb />
  </div>
</template>

<script>
import HeaderWeb from '../components/header/HeaderWeb.vue'
import FooterWeb from '../components/footer/FooterWeb.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderWeb,
    FooterWeb,
  },
  data() {
    return {
      infomation: {
        name: 'De4thZone',
        avatars: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
