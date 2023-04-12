<template>
  <div class="container-fluid-web" :class="{ isDark: checkIsDark }">
    <div class="container-web">
      <div class="header-web">
        <div class="header-left">
          <img
            :src="infomation.avatars"
            class="avatar"
            style="width: 40px; margin-right: 7px"
            alt="Avatar"
          />
          <span style="margin-right: 10px">{{ infomation.name }}</span>
          <input v-model="searchData" type="text" placeholder="Search tags" />
        </div>
        <div class="header-right">
          <div class="header-right-all">
            <div class="header-right-start">
              <span style="margin-right: 10px; cursor: pointer"
                ><nuxt-link to="/">Home</nuxt-link></span
              >
              <span style="margin-right: 10px; cursor: pointer"
                ><nuxt-link to="/newPost/NewPost">New Post</nuxt-link></span
              >
            </div>

            <div class="header-right-end">
              <img
                :src="infomation.avatars"
                class="avatar"
                style="width: 40px"
                alt="Avatar"
              />
              <span>
                <b-dropdown
                  :text="infomation.name"
                  variant="none"
                  class="b-dropdown-css"
                >
                  <b-dropdown-item href="#">My Account</b-dropdown-item>
                  <b-dropdown-item href="/login/LoginWeb"
                    >Logout</b-dropdown-item
                  >
                </b-dropdown>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    infomation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      //   searchData: '',
    }
  },
  computed: {
    searchData: {
      get() {
        return this.$store.state.inputValue
      },
      set(newValue) {
        this.$store.commit('updateSharedDataSearch', newValue)
      },
    },
    checkIsDark: {
      get() {
        return this.$store.state.isDark
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.container-fluid-web {
  background-color: #f7f8fa;
}
.container-web {
  margin-right: auto;
  margin-left: auto;
  // padding-left: 15px;
  // padding-right: 15px;
}
@media (min-width: 768px) {
  .container-web {
    width: 768px;
  }
}
@media (min-width: 992px) {
  .container-web {
    width: 992px;
  }
}
@media (min-width: 1200px) {
  .container-web {
    width: 70%;
  }
}

.header-web {
  display: flex;
  flex-direction: row;
  align-items: center;
  .header-left {
    width: 50%;
    .avatar {
      vertical-align: middle;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .header-right {
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    color: #a9a9a9;
    .avatar {
      vertical-align: middle;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .header-right-all {
      display: flex;
      flex-direction: row;
      align-items: center;
      .b-dropdown-css {
        margin: 0.5rem;
      }
    }
  }
}
@media (max-width: 800px) {
  .header-web {
    flex-direction: column;
    align-items: flex-start;
    .header-left {
      width: 100%;
    }
    .header-right {
      width: 100%;
      flex-direction: row;
    }
  }
}
@media (max-width: 400px) {
  .header-web {
    flex-direction: column;
    align-items: flex-start;
    .header-left {
      width: 100%;
    }
    .header-right {
      width: 100%;
      flex-direction: row;
      .header-right-all {
        flex-direction: column;
      }
    }
  }
}
.isDark {
  background-color: #1a202c !important;
  color: white !important;
}
</style>
