<template>
  <div>
    <div class="icon-theme">
      <button
        class="text-gray-500 dark:text-gray-400"
        style="border-style: none; background: none"
        @click="toggleTheme"
      >
        <b-icon
          v-show="isDark === true"
          icon="sun-fill"
          variant="light"
          style="width: 15px"
        ></b-icon>
        <b-icon
          v-show="isDark === false"
          icon="moon-fill"
          style="width: 15px"
        ></b-icon>
      </button>
    </div>
    <PageWebTest class="main-page" />
  </div>
</template>

<script>
import Vue from 'vue'
import PageWebTest from './PageWebTest.vue'

export default Vue.extend({
  components: {
    PageWebTest,
  },
  layout: 'testWeb',
  data() {
    return {
      // isDark: false,
    }
  },
  computed: {
    isDark: {
      get() {
        return this.$store.state.isDark
      },
      set(newValue) {
        this.$store.commit('updateIsDark', newValue)
      },
    },
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark')
    },
  },
})
</script>

<style>
.icon-theme {
  position: absolute;
  top: 10px;
  z-index: 1;
  right: 50%;
}

/* thiết lập chủ đề tối */
.dark {
  background-color: #1a202c;
  color: white;
}

/* thêm phần CSS cho div */

.dark div {
  background-color: #1a202c;
  color: white;
}

.dark .main-page {
  background-color: #1a202c;
  color: white;
}
</style>
