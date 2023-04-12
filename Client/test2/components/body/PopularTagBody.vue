<template>
  <div class="popular-tags" :class="{ isDark: checkIsDark }">
    <table class="table">
      <tbody>
        <tr class="header-popular-one" @click="openPopular = !openPopular">
          <td
            class="header-popular-tags"
            :style="{ color: checkIsDark ? 'white' : 'black' }"
          >
            <h4>Popular tags</h4>
          </td>
        </tr>
        <tr
          v-for="category in popularTags"
          v-show="openPopular"
          :key="category.id"
        >
          <td
            class="name-popular"
            :style="{ color: checkIsDark ? 'white' : 'black' }"
          >
            {{ category.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from '../../dataFake/data.json'
export default {
  data() {
    return {
      popularTags: data.popularTags,
      openPopular: true,
    }
  },
  computed: {
    checkIsDark: {
      get() {
        return this.$store.state.isDark
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.popular-tags {
  background-color: #f8f9fb;
  padding: 0;
  margin-top: 10px;
  table {
    width: 100%;
    border: 1px solid #ccc;
    margin: 0;
  }
  .header-popular-tags {
    border: 1px solid #ccc;
  }
  td {
    text-align: left;
    border: none;
    // padding: 0;
  }
  .blue-badge {
    background-color: #a9a9a9;
    color: white;
  }
}
.name-popular {
  cursor: pointer;
}
.name-popular:hover {
  background-color: #0af23c;
  color: rgb(123, 62, 222);
}
.header-popular-one {
  cursor: pointer;
}
.header-popular-one:hover {
  background-color: #0af23c;
}
.isDark {
  background-color: #1a202c !important;
  color: white !important;
}
</style>
