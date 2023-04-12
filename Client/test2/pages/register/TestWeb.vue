<template>
  <div>
    <button
      class="text-gray-500 dark:text-gray-400"
      style="border-style: none; background: none"
      @click="toggleTheme"
    >
      <b-icon
        v-show="isDark === true"
        icon="sun-fill"
        style="width: 15px"
      ></b-icon>
      <b-icon
        v-show="isDark === false"
        icon="moon-fill"
        style="width: 15px"
      ></b-icon>
    </button>
    <div class="dark:bg-gray-800">fidufnkdzjhib</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark')
    },
  },
}
</script>

<style scoped>
/* thiết lập chủ đề sáng */
body {
  background-color: white;
}

/* thiết lập chủ đề tối */
.dark {
  background-color: #1a202c;
  color: white;
}

/* thêm phần CSS cho div */
div {
  background-color: white;
}

.dark div {
  background-color: #1a202c;
  color: white;
}
</style>
