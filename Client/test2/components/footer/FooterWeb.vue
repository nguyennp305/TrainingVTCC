<template>
  <div class="footer-web" :class="{ isDark: checkIsDark }">
    <div class="container">
      <footer class="footer">
        <div style="padding: 1.5rem">
          <!-- class="row mt-4" -->
          <div class="row-footer">
            <!-- class="col-lg-3 col-md-6 mb-4 mb-md-0"-->
            <div class="column-footer">
              <img
                :src="avatars"
                class="avatar"
                style="width: 60px; margin-right: 7px"
                alt="Avatar"
              />

              <ul class="list-unstyled mb-0">
                <li class="text">Copyright @ Your Website 2020</li>
              </ul>
            </div>

            <div class="column-footer">
              <h5>Features</h5>

              <ul class="list-unstyled">
                <li>Cool stuff</li>
                <li>Random feature</li>
                <li>Team feature</li>
                <li>Stuff for developers</li>
                <li>Another one</li>
                <li>Last time</li>
              </ul>
            </div>

            <div class="column-footer">
              <h5>Resources</h5>

              <ul class="list-unstyled">
                <li>Resource</li>
                <li>Resource name</li>
                <li>Another resource</li>
                <li>Final resource</li>
              </ul>
            </div>

            <div class="column-footer">
              <h5>About</h5>

              <ul class="list-unstyled">
                <li>Team</li>
                <li>Locations</li>
                <li>Privacy</li>
                <li>Teams</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatars: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
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
.footer-web {
  background-color: #353a40;
  min-height: 200px;
  .footer {
    text-align: left;
    color: white;
  }
}
.column-footer {
  margin-bottom: 1.5rem;
}
.row-footer {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 1.5rem;
}
.avatar {
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
@media (min-width: 1000px) {
  .column-footer {
    flex: 0 1 25%;
    max-width: 25%;
  }
}
@media (max-width: 1000px) {
  .column-footer {
    flex: 0 1 50%;
    // max-width: 50%;
    // min-width: 500px;
  }
}
@media (max-width: 576px) {
  .column-footer {
    flex: 0 1 100%;
    max-width: 100%;
  }
}
.isDark {
  background-color: #1a202c !important;
  color: white !important;
}
</style>
