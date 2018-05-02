<template>
  <div>
    <div class="py-2 px-2">
      <div class="card bg-light">
        <div class="card-header bg-primary text-white pt-1 px-1 pb-0 m-0">
          <div class="row mx-0">
            <div class="col-3 px-3">
              <!-- image -->
              <img :src="newsApiArticle.urlToImage" alt="No image available" class="img-thumbnail"/>
            </div>
            <div class="col-9">
              <!-- article -->
              <div class="row mx-0">
                <div class="col-12 px-1">
                  <!-- headline -->
                  <div class="">{{newsApiArticle.title}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body p-0 mx-1 mb-0">
          <div class="row mx-0">
            <div class="col-12 px-1">
              <!-- description -->
              <div class="small">{{newsApiArticle.description}}</div>
            </div>
          </div>
        </div>
        <div class="card-footer p-1 m-0">
          <div class="row mx-0">
            <div class="col-auto px-1 mw-50">
              <!-- date -->
              <span class="small">{{newsApiArticle.publishedAt}}</span>
            </div>
            <div class="col-auto px-1 ml-auto">
              <!-- source -->
              <a :href="newsApiArticle.url" class="small text-right">{{newsApiArticle.source.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NewsApiArticle from './NewsApiArticleComponent';
export default NewsApiArticle;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
