<template>
  <div>
    <header
      id="header"
      class="header fixed-top d-flex align-items-center sticked"
    >
      <div class="container d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          class="logo d-flex align-items-center me-auto me-lg-0"
        >
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <img src="assets/img/logo.png" alt="">
        
        </a>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <RouterLink :to="{ name: 'home' }" class="active"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'about' }">About</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'shop' }">Our Shop</RouterLink>
            </li>
          </ul>
        </nav>
        <!-- .navbar -->
        <RouterLink :to="{ name: 'shop' }" class="btn-book-a-table"
          >Our Shop</RouterLink
        >
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
