<template>
  <div>
    <div class="py-2 px-2">
      <div class="container-fluid">
        <transition-group name="tile-list" tag="div" class="row">
          <div class="col-sm-12 col-xl-4 col-lg-6 col-md-6 p-0 m-0" v-for="item in currentNewsArticlesAsArray" :key="item.url">
            <NewsApiArticle :newsApiArticle="item">
            </NewsApiArticle>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HomePage from './HomePageComponent';
export default HomePage;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile-list-move {
  transition: transform 1s;
}
.tile-list-enter-active, .tile-list-leave-active {
  transition: opacity .5s;
}
.tile-list-enter, .tile-list-leave-to {
  opacity: 0;
}
</style>
