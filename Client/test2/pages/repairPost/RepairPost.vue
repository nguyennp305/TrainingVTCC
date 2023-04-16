<template>
  <div class="container-fluid-css create-post">
    <div class="form-create-new-post">
      <h2 style="margin-bottom: 50px">Create new post</h2>
      <div class="info">
        <img
          :src= "avatar"
          class="avatar"
          style="width: 40px; margin-right: 7px"
          alt="Avatar"
        />
        <div style="margin-right: 10px">
          Your name:
          <input
            v-model="name"
            type="text"
            placeholder="Name"
            style="border: 1px solid black; border-radius: 10px"
            required
          />
          <div style="font-size: 10px; color: #a9a9a9; text-align: left">
            a month ago
          </div>
        </div>
      </div>
      <div class="forum-description">
        <div><b>Please fill your title post.</b></div>
        <div>
          <textarea
            v-model="title"
            type="text"
            placeholder="title"
            style="width: 100%; border-radius: 10px"
            required
          ></textarea>
        </div>
        <div><b>Please fill your content post.</b></div>
        <div style="color: #a9a9a9">
          <textarea
            v-model="content"
            type="text"
            placeholder="content"
            style="width: 100%; border-radius: 10px"
            required
          ></textarea>
        </div>
        <div><b>Please fill your tags post.</b></div>
        <div style="color: #a9a9a9">
          <textarea
            v-model="tags"
            type="text"
            placeholder="tags"
            style="width: 100%; border-radius: 10px"
            required
          ></textarea>
        </div>
      </div>

      <div
        v-show="checkExistOrEmpty === true"
        :class="{ warning: checkExistOrEmpty === true }"
      >
        <div style="color: red">
          <b>Please fill in all input. Input is not empty.</b>
        </div>
      </div>

      <div class="button-create-post">
        <button
          type="button"
          class="btn btn-primary"
          style="margin-top: 20px; border-radius: 10px"
          @click="repairPost"
        >
          Repair Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'testWeb',
  data() {
    return {
      name: '',
      title: '',
      content: '',
      tags: '',
      numberHeart: 0,
      heartColor: 'black',
      avatar:
        'https://i.pinimg.com/474x/ae/ca/a6/aecaa6bd6b1e2fd3736969f676a009e2.jpg',
      checkComment: false,
      numberComment: 0,

      checkExistOrEmpty: false,
    }
  },
  computed: {
    postId() {
      return this.$store.state.findIdAPost
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:4000/list-post/${this.postId}`
      )
      const data = response.data[0]
      this.name = data.name
      this.title = data.title
      this.content = data.content
      this.tags = data.tags
      this.numberHeart = data.numberHeart
      this.heartColor = data.heartColor
      this.avatar = data.avatar
      this.checkComment = data.checkComment
      this.numberComment = data.numberComment
    //   console.log(data)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async repairPost() {
      if (
        this.name === '' ||
        this.title === '' ||
        this.content === '' ||
        this.tags === ''
      ) {
        this.checkExistOrEmpty = true
      } else {
        try {
            const response = await axios.put(
                `http://localhost:4000/list-post/${this.postId}`,
                {
                name: this.name,
                title: this.title,
                content: this.content,
                tags: this.tags,
                numberHeart: this.numberHeart,
                heartColor: this.heartColor,
                avatar: this.avatar,
                checkComment: this.checkComment,
                numberComment: this.numberComment,
                }
            )
            console.log(response)
            this.$router.push('/PageWebTest')
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.create-post {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 65vh;
}
.container-fluid-css {
  background-color: #eff0f2;
  margin-left: auto;
  margin-right: auto;
  // padding-left: 15px;
  // padding-right: 15px;
}
@media (min-width: 768px) {
  .container-fluid-css {
    width: 768px;
  }
}
@media (min-width: 992px) {
  .container-fluid-css {
    width: 992px;
  }
}
@media (min-width: 1200px) {
  .container-fluid-css {
    width: 70%;
  }
}
.form-create-new-post {
  width: 500px;
  border-radius: 10px;
  padding: 40px 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: -3px -3px 9px rgba(170, 169, 169, 0.6352941176),
    3px 3px 7px rgba(147, 149, 151, 0.671);
}
.avatar {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.container-fluid-css {
  background-color: white;
  // padding: 10px;

  .info {
    display: flex;
  }
  .forum-description {
    margin-left: 45px;
    text-align: left;
  }
  .comment-and-likes {
    display: flex;
    flex-direction: row-reverse;
    .icon-heart {
      cursor: pointer;
    }
  }
}
.button-create-post {
  display: flex;
  flex-direction: row-reverse;
}
</style>
