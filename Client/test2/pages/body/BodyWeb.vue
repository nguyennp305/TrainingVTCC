<template>
  <div class="container-body">
    <!-- class="row" -->
    <div class="row-body">
      <!-- class="col-body-1 col-md-3 col-sm-3" -->
      <div class="option-body">
        <OptionsBody />
    </div>
      <!-- class="col-body-2 col-md-6 col-sm-9" -->
      <div class="center-body">
        <CenterBody :infomation="infomation" />
      </div>
      <!-- class="col-body-3 col-md-3 col-sm-12 row" -->
      <div
        class="category-and-popular row-cate-and-popu"
        style="height: fit-content"
      >
        <!-- class="col-sm-12 col-md-12" -->
        <CategoriesBody class="category-body" />
        <!-- class="col-sm-12 col-md-12" -->
        <PopularTagBody class="popular-body" />
      </div>
    </div>
  </div>
</template>

<script>
import OptionsBody from '../../components/body/OptionsBody.vue';
import CategoriesBody from '../../components/body/CategoriesBody.vue';
import PopularTagBody from '../../components/body/PopularTagBody.vue';
import CenterBody from '../../components/body/CenterBody.vue';
export default {
  components: {
      OptionsBody,
      CategoriesBody,
      PopularTagBody,
      CenterBody,
  },
  props: {
    infomation: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container-body {
  margin-right: auto;
  margin-left: auto;
  // padding-left: 15px;
  // padding-right: 15px;
}
@media (min-width: 768px) {
  .container-body {
    width: 768px;
  }
}
@media (min-width: 992px) {
  .container-body {
    width: 992px;
  }
}
@media (min-width: 1200px) {
  .container-body {
    width: 70%;
  }
}
.col-body-1 {
  background-color: #eff0f2;
}
.col-body-2 {
  background-color: #eff0f2;
}
.col-body-3 {
  background-color: #eff0f2;
}
.row-body {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.row-cate-and-popu {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
@media (min-width: 800px) {
  .option-body {
    flex: 1 1 20%;
    margin-right: 5%;
  }
  .center-body {
    flex: 2 1 50%;
    margin-right: 3%;
  }
  .category-and-popular {
    flex: 1 1 22%;
  }
  .row-cate-and-popu {
    .category-body {
      flex: 1 1 100%;
    }
    .popular-body {
      flex: 1 1 100%;
    }
  }
}
@media (max-width: 800px) {
  .option-body {
    flex: 1 1 100%;
    margin-right: 5%;
    margin-top: 10px;
  }
  .center-body {
    flex: 1 1 100%;
    margin-top: 10px;
  }
  .category-and-popular {
    flex: 1 1 100%;
    margin-top: 10px;
  }
  .row-cate-and-popu {
    margin-top: 10px;
    .category-body {
      flex: 1 1 100%;
    }
    .popular-body {
      flex: 1 1 100%;
    }
  }
}
</style>
