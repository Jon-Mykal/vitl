<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import banner from '../assets/img/Banner.jpg';
const bannerImage = `background-image: url(${banner});`;
const frostCss = `
background: rgba(255, 255, 255, 0.06);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.4px);
-webkit-backdrop-filter: blur(4.4px);
`;
</script>

<template>
  <section id="hero" class="hero d-flex align-items-center section-bg" :style="bannerImage">
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div
          class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start p-3" :style="frostCss">
          <h2 data-aos="fade-up" class="aos-init aos-animate text-white">We're ready to supply materials<br>for your building
            project.</h2>
          <p data-aos="fade-up" data-aos-delay="100" class="aos-init aos-animate text-white">We stock a wide range of products to
            complete any building project you have in mind.</p>
          <div class="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <a href="#book-a-table" class="btn-book-a-table">View Our Products</a>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start" >
          <!-- <img :src="banner" class="img-fluid aos-init aos-animate" alt="" data-aos="zoom-out" data-aos-delay="300"> -->
        </div>
      </div>
    </div>
  </section>
  <main class="main">
    <section id="about" class="about">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-header">
          <p>Welcome to <span>Virgin’s International Trading</span></p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-7 position-relative about-img aos-init aos-animate"
            style="background-image: url(assets/img/about.jpg) ;" data-aos="fade-up" data-aos-delay="150">
            <div class="call-us position-absolute">
              <h4>Book a Table</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div class="col-lg-5 d-flex align-items-end aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-itali">
                We're here to provide you with a wide range of hardware supplies for you to either get started or finish
                your next building project. We have products covering various sections of a project including but not
                limited to the <strong>balcony, shower and windows</strong>. Some of our products use high quality aluminium to give you
                durability while keeping the price in check. Take a look at around!
              </p>
              <ul>
                <li><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                  pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>

              <div class="position-relative mt-4">
                <img src="assets/img/about-2.jpg" class="img-fluid" alt="">
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
              </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</main></template>
