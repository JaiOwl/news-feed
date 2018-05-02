<template>
  <div id="appNavBar">
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">
        <i class="fa d-inline fa-newspaper"></i>
        <b> News-Feed</b>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import AppNavBar from './AppNavBarComponent';
export default AppNavBar;
</script>

<style>
</style>
