<template>
    <div>
      <div v-for="(onePosts, index) in filteredListPosts" :key="index">
        <div class="forum-examples" :class="{isDark: checkIsDark}">
          <div class="info">
            <img
              :src="onePosts.avatar"
              class="avatar"
              style="width: 40px; margin-right: 7px"
              alt="Avatar"
            />
            <div style="margin-right: 10px">
              {{ onePosts.name }}
              <div style="font-size: 10px; color: #a9a9a9">a month ago</div>
            </div>
          </div>
          <div class="forum-description">
            <div>
              <b>{{ onePosts.title }}</b>
            </div>
            <div style="color: #a9a9a9">{{ onePosts.content }}</div>
            <div style="color: #a9a9a9">#{{ onePosts.tags }}</div>
          </div>
          <div class="comment-and-likes" style="color: #a9a9a9">
            <div>
              <span style="cursor: pointer" @click="openComment(index)"
                ><b-icon icon="messenger" variant="primary"></b-icon>
                {{ onePosts.numberComment }} Comment
              </span>
              <b-icon
                class="icon-heart"
                icon="heart-fill"
                :style="{ color: onePosts.heartColor }"
                @click="clickHeart(index)"
              ></b-icon>
              <span> {{ onePosts.numberHeart }} likes</span>
            </div>
          </div>
          <div v-show="onePosts.checkComment" class="comment">
            <CommentBody
              @number-comment-changed="updateNumberComment(index, $event)"
            />
            <button @click="closeComment(index)">Close Comment</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Vue from 'vue'
  // import data from '../../.././dataFake/data.json'
  import CommentBody from '../commentBody/CommentBody.vue'
  export default Vue.extend({
    components: {
      CommentBody,
    },
    props: {
      infomation: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        // listPosts: data.listPosts,
        listPosts: [],
        testSearch: '',
      }
    },
    computed: {
      filteredListPosts() {
        return this.listPosts.filter((post) => {
          return post.tags.includes(this.$store.state.inputValue)
        })
      },
      checkIsDark: {
        get() {
        return this.$store.state.isDark;
        }
      },
    },
    async created() {
      await this.getListPosts()
    },

    methods: {

      async getListPosts() {
        try {
          const response = await this.$axios.get('http://localhost:4000/list-post')
          this.listPosts = response.data
        } catch (error) {
          console.log(error);
        }
      },

      updateNumberComment(index, value) {
        this.filteredListPosts[index].numberComment = value
      },
      clickHeart(index) {
        this.listPosts[index].heartColor =
          this.listPosts[index].heartColor === 'black' ? 'red' : 'black'
        this.listPosts[index].numberHeart +=
          this.listPosts[index].heartColor === 'red' ? 1 : -1
      },
      openComment(index) {
        this.listPosts[index].checkComment = !this.listPosts[index].checkComment
      },
      closeComment(index) {
        this.listPosts[index].checkComment = !this.listPosts[index].checkComment
      },
    },
  })
  </script>
  
  <style lang="scss" scoped>
  .avatar {
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .forum-examples {
    background-color: white;
    padding: 10px;
    margin-top: 10px;
    .info {
      display: flex;
    }
    .forum-description {
      margin-left: 45px;
    }
    .comment-and-likes {
      display: flex;
      flex-direction: row-reverse;
      .icon-heart {
        cursor: pointer;
      }
    }
  }
  
  .comment {
    button {
      border: 2px solid black;
      border-radius: 10px;
    }
  }
  .isDark {
    background-color: #1a202c !important;
  color: white !important;
  }
  </style>
  