<template>
  <div>
    <header
      id="header"
      class="header fixed-top d-flex align-items-center sticked"
    >
      <div class="container d-flex align-items-center justify-content-between">
        <a
          href="/"
          class="logo d-flex align-items-center me-auto me-lg-0"
        >
          <!-- Uncomment the line below if you also wish to use an image logo -->
         <img :src="logo" alt="" />
        </a>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'about' }">About</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
            </li>
            <li id="shopLink">
              <RouterLink :to="{ name: 'shop' }" class="btn-book-a-table">Our Products</RouterLink>
            </li>
          </ul>
        </nav>
        <!-- .navbar -->
        <section></section>
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  </div>
</template>

<script setup>
import logo from '../assets/img/logo.png'
</script>

<style lang="css" scoped></style>
