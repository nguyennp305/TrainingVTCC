<template>
  <div class="categories" :class="{ isDark: checkIsDark }">
    <table class="table">
      <tbody>
        <tr
          class="header-categories-one"
          @click="openCategories = !openCategories"
        >
          <td
            class="header-categories"
            :style="{ color: checkIsDark ? 'white' : 'black' }"
          >
            <h4>Categories</h4>
          </td>
        </tr>
        <tr
          v-for="category in categories"
          v-show="openCategories"
          :key="category.id"
        >
          <td class="body-categories">
            <b-nav
              ><b-nav-item
                >{{ category.name }}
                <b-badge class="blue-badge">{{
                  category.number
                }}</b-badge></b-nav-item
              ></b-nav
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from '../.././dataFake/data.json'
export default {
  data() {
    return {
      categories: data.categories,
      openCategories: true,
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
.categories {
  background-color: #f8f9fb;
  padding: 0;
  table {
    width: 100%;
    margin: 0;
  }

  .header-categories-one {
    cursor: pointer;
  }
  .header-categories-one:hover {
    background-color: #0af23c;
  }
  .header-categories {
    padding-left: 10px;
  }
  .body-categories:hover {
    background-color: #0af23c;
  }
  td {
    border: 1px solid #ccc;
    text-align: left;
    padding: 0;
  }
  .blue-badge {
    background-color: #a9a9a9;
    color: white;
  }
}
.isDark {
  background-color: #1a202c !important;
  color: white !important;
}
</style>
