<template>
  <div class="container-fluid-css">
        <div class="info">
          <img
            src="https://i.pinimg.com/474x/ae/ca/a6/aecaa6bd6b1e2fd3736969f676a009e2.jpg"
            class="avatar"
            style="width: 40px; margin-right: 7px"
            alt="Avatar"
          />
          <div style="margin-right: 10px">
            infomation.name
            <div style="font-size: 10px; color: #a9a9a9">a month ago</div>
          </div>
        </div>
        <div class="forum-description">
          <div><b>Forum example next and laravrl rest api</b></div>
          <div style="color: #a9a9a9">{{ content }}</div>
          <div style="color: #a9a9a9">{{ tags }}</div>
        </div>
  </div>
</template>

<script>
export default {
  layout: 'testWeb',
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
  }
  .comment-and-likes {
    display: flex;
    flex-direction: row-reverse;
    .icon-heart {
      cursor: pointer;
    }
  }
}
</style>
