<template>
  <div class="container-fluid-css">
    <!-- <HeaderWeb :infomation="infomation" /> -->
    <BodyWeb :infomation="infomation" />
    <!-- <FooterWebVue /> -->
    
  </div>
</template>

<script>
import BodyWeb from './body/BodyWeb.vue';
// import HeaderWeb from '~/components/header/HeaderWeb.vue'
// import FooterWebVue from '~/components/footer/FooterWeb.vue';

export default {
  components: {
    // HeaderWeb,
    BodyWeb,
    // FooterWebVue,
  },
  // layout: 'testWeb',

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

<style lang="scss" scoped>
.container-fluid-css {
  background-color: #eff0f2;
  margin-left: auto;
  margin-right: auto;
  // padding-left: 15px;
  // padding-right: 15px;
}
@media (max-width: 400px) {
  .container-fluid-css {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
