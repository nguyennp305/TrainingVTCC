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
        <tr>
          <td><button class="button-tag" @click="addTagClick = true">Add tag</button></td>
        </tr>
        <tr v-show="addTagClick"><td>
            <input
              v-model="addTagName"
              type="text"
              placeholder="Add tag"
              style="border-radius: 10px; border: 1px solid black"
              required
            />
            <br/>
            <b v-show="checkExistOrEmpty" style="color: red">New tag is empty or not valid !!</b>
            <br/>
            <button class="button-tag" @click="AddTag">Add</button>
            </td></tr>
        <tr
          v-for="(category, index) in popularTags"
          v-show="openPopular"
          :key="index"
        >
          <td
            class="name-popular"
            :style="{ color: checkIsDark ? 'white' : 'black' }"
          >
            #{{ category.name }}
            <button class="button-tag" @click="deleteTag(category.name)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import data from '../../dataFake/data.json'
export default {
  data() {
    return {
      // popularTags: data.popularTags,
      popularTags: [],
      openPopular: true,
      addTagClick: false,
      addTagName: '',
      checkExistOrEmpty: false,
    }
  },

  computed: {
    checkIsDark: {
      get() {
        return this.$store.state.isDark
      },
    },
  },

  // gọi getPopularTags khi component đc tạo
  async created() {
    await this.getPopularTags()
  },
  methods: {
    async getPopularTags() {
      try {
        const response = await this.$axios.get('http://localhost:4000/tags')
        this.popularTags = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTag(name) {
      try {
        const response = await this.$axios.delete(
          `http://localhost:4000/tags/${name}`
        )
        console.log(response.data)
        this.getPopularTags()
      } catch (error) {
        console.log(error)
      }
    },
    async AddTag() {
      if (this.addTagName === '') {
        this.checkExistOrEmpty = true;
      } else {
        try {
        const response = await this.$axios.post(`http://localhost:4000/tags`, {
          name: this.addTagName,
        })
        console.log(response.data)
        this.addTagName = '';
        this.checkExistOrEmpty = false;
        this.getPopularTags()
        this.addTagClick = false;
      } catch (error) {
        console.log(error)
      }
      }
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
.button-tag {
    border: 2px solid rgb(149, 224, 251);
    border-radius: 10px;
    background-color: rgb(149, 224, 251);
  }
</style>
