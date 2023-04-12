<template>
  <div class="center-body">
    <div class="ghim sticky-example">
      <h4
        :class="{ isDark: checkIsDark }"
        style="background-color: white; margin: 0; padding-bottom: 10px"
      >
        Ghim
      </h4>
      <div class="forum-examples" :class="{ isDark: checkIsDark }">
        <div class="info">
          <img
            :src="infomation.avatars"
            class="avatar"
            style="width: 40px; margin-right: 7px"
            alt="Avatar"
          />
          <div style="margin-right: 10px">
            {{ infomation.name }}
            <div style="font-size: 10px; color: #a9a9a9">a month ago</div>
          </div>
        </div>
        <div class="forum-description">
          <div><b>Forum example next and laravrl rest api</b></div>
          <div style="color: #a9a9a9">{{ content }}</div>
          <div style="color: #a9a9a9">{{ tags }}</div>
        </div>
        <div class="comment-and-likes" style="color: #a9a9a9">
          <div>
            <span style="cursor: pointer" @click="openComment()"
              ><b-icon
                icon="messenger"
                variant="primary"
              ></b-icon>
              {{ numberComment }}
              Comment
            </span>
            <b-icon
              class="icon-heart"
              icon="heart-fill"
              :style="{ color: heartColor }"
              @click="clickHeart"
            ></b-icon>
            <span> {{ numberHeart }} likes</span>
          </div>
        </div>
        <div v-show="checkComment" class="comment">
          <CommentBody @updateNumberComment="updateCommentNumber" />
          <button @click="closeComment">Close Comment</button>
        </div>
      </div>
      <hr style="background-color: #eff0f2; margin: 0" />
    </div>

    <div class="posts-center-body-header">
      <div class="header-left"><h4>Posts</h4></div>
      <div class="header-right">
        <!-- <b-button-group>
              <b-button class="hover-color">Feed</b-button>
              <b-button class="hover-color">Latest</b-button>
              <b-button class="hover-color">Oldest</b-button>
            </b-button-group> -->
        <div class="button-group">
          <button
            class="button"
            :class="{ active: buttonClick === 1 }"
            @click="buttonClick = 1"
          >
            Feed
          </button>
          <button
            class="button"
            :class="{ active: buttonClick === 2 }"
            @click="buttonClick = 2"
          >
            Latest
          </button>
          <button
            class="button"
            :class="{ active: buttonClick === 3 }"
            @click="buttonClick = 3"
          >
            Oldest
          </button>
        </div>
      </div>
    </div>

    <div class="post-list-body-bottom">
      <PostListBody v-show="buttonClick === 1" :infomation="infomation" />
      <LastestWeb v-show="buttonClick === 2" :infomation="infomation" />
      <OldestWeb v-show="buttonClick === 3" :infomation="infomation" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import LastestWeb from './post/LastestWeb.vue'
import OldestWeb from './post/OldestWeb.vue'
import PostListBody from './post/PostListBody.vue'
import CommentBody from './commentBody/CommentBody.vue'

export default Vue.extend({
  components: {
    PostListBody,
    LastestWeb,
    OldestWeb,
    CommentBody,
    //   'b-icon': BIcon,
  },

  props: {
    infomation: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      content:
        'The sample app is a social blogging site, forum stite, ...(i.e. a clone of dev.to or medium.com). We mainly usr Next.js / SWR and some other support libraries.',
      tags: '#javascript #react #next #laravel',
      numberHeart: 14,
      heartColor: 'black',
      checkComment: false,
      numberComment: 0,
      buttonClick: 1,
    }
  },
  computed: {
    checkIsDark: {
      get() {
        return this.$store.state.isDark
      },
      
    },
  },

  methods: {
    clickHeart() {
      this.heartColor = this.heartColor === 'black' ? 'red' : 'black'
      this.numberHeart += this.heartColor === 'red' ? 1 : -1
    },
    openComment() {
      this.checkComment = !this.checkComment
    },
    closeComment() {
      this.checkComment = !this.checkComment
    },
    updateCommentNumber(number) {
      return (this.numberComment = number)
    },
  },
})
</script>

<style lang="scss" scoped>
.sticky-example {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
.avatar {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.forum-examples {
  background-color: white;
  padding: 10px;

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
.posts-center-body-header {
  display: flex;
  align-items: center;
  margin-top: 20px;
  .header-left {
    width: 20%;
    min-width: 50px;
  }
  .header-right {
    width: 80%;
    min-width: 252px;
    display: flex;
    flex-direction: row-reverse;
    .button-group {
      display: flex;
      button {
        border: none !important;
        border-radius: 10px;
        margin-left: 10px;
        &:hover {
          background-color: #275bde;
        }
      }
      .active {
        background-color: #09ee37;
      }
    }
    .hover-color {
      border: none;
      background-color: #eff0f2;
      color: black;

      &:hover {
        background-color: #3949d5;
      }
    }
  }
}
.isDark {
  background-color: #1a202c !important;
  color: white !important;
}
</style>
