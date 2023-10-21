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
          class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start p-3"
          :style="frostCss">
          <h2 data-aos="fade-up" class="aos-init aos-animate text-white">We're ready to supply materials<br>for your
            building
            project.</h2>
          <p data-aos="fade-up" data-aos-delay="100" class="aos-init aos-animate text-white">We stock a wide range of
            products to
            complete any building project you have in mind.</p>
          <div class="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <a href="#book-a-table" class="btn-book-a-table">View Our Products</a>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <!-- <img :src="banner" class="img-fluid aos-init aos-animate" alt="" data-aos="zoom-out" data-aos-delay="300"> -->
        </div>
      </div>
    </div>
  </section>
  <main class="main">
    <section id="welcome">
      <div class="section-header">
        <p>Welcome to <span>Virgin’s International Trading</span></p>
      </div>

      <div class="row justify-content-center">
        <div class="col offset-2 col-lg-10 col-md-10 mx-5" data-aos="fade-up" data-aos-delay="300">
          <p class="lead">
            We're here to provide you with a wide range of hardware supplies for you to either get started or finish
            your next building project. We have products covering various sections of a project including but not
            limited to the <strong>balcony, shower and windows</strong>. Some of our products use high quality aluminium
            to give you
            durability while keeping the price in check. Take a look at around!
          </p>
        </div>
      </div>
    </section>
    <section id="menu" class="menu">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-header">
          <p>Featured <span>Categories</span></p>
        </div>

        <ul class="nav nav-tabs d-flex justify-content-center aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="200" role="tablist">

          <li class="nav-item" role="presentation">
            <a class="nav-link show" data-bs-toggle="tab" data-bs-target="#menu-starters" aria-selected="false" role="tab"
              tabindex="-1">
              <h4>Aluminium</h4>
            </a>
          </li><!-- End tab nav item -->

          <li class="nav-item" role="presentation">
            <a class="nav-link active" data-bs-toggle="tab" data-bs-target="#menu-breakfast" aria-selected="true"
              role="tab">
              <h4>Balcony</h4>
            </a><!-- End tab nav item -->

          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch" aria-selected="false" role="tab"
              tabindex="-1">
              <h4>Shower</h4>
            </a>
          </li><!-- End tab nav item -->
        </ul>

        <div class="tab-content aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">

          <div class="tab-pane fade" id="menu-aluminium" role="tabpanel">

            <div class="tab-header text-center">

              <h3>Aluminium</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-1.png" class="glightbox"><img src="assets/img/menu/menu-item-1.png"
                    class="menu-img img-fluid" alt=""></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <!-- <a href="assets/img/menu/menu-item-2.png" class="glightbox"><img src="assets/img/menu/menu-item-2.png"
                    class="menu-img img-fluid" alt=""></a> -->
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <!-- <a href="assets/img/menu/menu-item-3.png" class="glightbox"><img src="assets/img/menu/menu-item-3.png"
                    class="menu-img img-fluid" alt=""></a> -->
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->

            </div>
          </div><!-- End Starter Menu Content -->

          <div class="tab-pane fade active show" id="menu-balcony" role="tabpanel">

            <div class="tab-header text-center">
              <h3>Balcony</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <!-- <a href="assets/img/menu/menu-item-1.png" class="glightbox"><img src="assets/img/menu/menu-item-1.png"
                    class="menu-img img-fluid" alt=""></a> -->
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <!-- <a href="assets/img/menu/menu-item-2.png" class="glightbox"><img src="assets/img/menu/menu-item-2.png"
                    class="menu-img img-fluid" alt=""></a> -->
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <!-- <a href="assets/img/menu/menu-item-3.png" class="glightbox"><img src="assets/img/menu/menu-item-3.png"
                    class="menu-img img-fluid" alt=""></a> -->
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->


            </div>
          </div><!-- End Breakfast Menu Content -->

          <div class="tab-pane fade" id="menu-shower" role="tabpanel">

            <div class="tab-header text-center">

              <h3>Shower</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-1.png" class="glightbox"><img src="assets/img/menu/menu-item-1.png"
                    class="menu-img img-fluid" alt=""></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <!-- <a href="assets/img/menu/menu-item-2.png" class="glightbox"><img src="assets/img/menu/menu-item-2.png"
        class="menu-img img-fluid" alt=""></a> -->
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div><!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <!-- <a href="assets/img/menu/menu-item-3.png" class="glightbox"><img src="assets/img/menu/menu-item-3.png"
        class="menu-img img-fluid" alt=""></a> -->
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div><!-- Menu Item -->


            </div>
          </div><!-- End Starter Menu Content -->



        </div>

      </div>
    </section>
  </main>
</template>
