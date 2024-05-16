<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import banner from "../assets/img/Banner.jpg";
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
  <section
    id="hero"
    class="hero d-flex align-items-center section-bg"
    :style="bannerImage"
  >
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div
          class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start p-3"
          :style="frostCss"
        >
          <h2 data-aos="fade-up" class="aos-init aos-animate text-white">
            We're ready to supply materials<br />for your building project.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            class="aos-init aos-animate text-white"
          >
            We stock a wide range of products to complete any building project
            you have in mind.
          </p>
          <div
            class="d-flex aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <!-- <a href="#book-a-table" class="btn-book-a-table"
              >View Our Products</a
            > -->
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
      <section class="container">
        <div class="section-header">
          <p>
            Welcome to
            <span class="fw-bold">Virgin’s International Trading</span>
          </p>
        </div>

        <div class="row justify-content-center">
          <div
            class="col offset-2 col-lg-10 col-md-10 mx-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p class="lead">
              We're here to provide you with a wide range of supplies
              for you to either get started or finish your next building
              project. We have products covering various sections of a project
              including but not limited to the
              <strong
                >balcony, showers, retractable mesh frames, windows and
                doors</strong
              >. Our extrusions are manufactured using high quality aluminium to
              give you durability while keeping the price in check. Take a look
              around!
            </p>
          </div>
        </div>
      </section>
    </section>
    <section id="menu" class="menu">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-header">
          <p>Featured <span class="fw-bold">Products</span></p>
        </div>

        <ul
          class="nav nav-tabs d-flex justify-content-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#menu-aluminium"
              aria-selected="false"
              role="tab"
              tabindex="-1"
            >
              <h4>Aluminium</h4>
            </a>
          </li>
          <!-- End tab nav item -->

          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-balcony"
              role="tab"
            >
              <h4>Balcony</h4> </a
            ><!-- End tab nav item -->
          </li>
          <li class="nav-item d-none" role="presentation">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-shower"
              role="tab"
              tabindex="-1"
            >
              <h4>Shower</h4>
            </a>
          </li>
          <!-- End tab nav item -->
        </ul>

        <div
          class="tab-content aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="tab-pane fade active show"
            id="menu-aluminium"
            role="tabpanel"
          >
            <div class="tab-header text-center">
              <h3>Aluminium</h3>
            </div>

            <div class="row gy-5">
              <div class="col-lg-4 menu-item">
                <a
                  href="https://virginsintltrading.fygaroshops.com/products/45fbd29d-ee90-4d07-a7cd-94d10fbe452d/"
                  class="glightbox"
                >
                  <img
                    class="img-fluid pb-3"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371679/f8bd0f34-e92e-4a09-8ea1-7e830211baa6.jpg"
                    alt=""
                  />
                </a>
                <h4>3/4 Round - 21FT</h4>
                <p class="price">J$1,114.12</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/45fbd29d-ee90-4d07-a7cd-94d10fbe452d/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a
                  href="https://virginsintltrading.fygaroshops.com/products/3fa19472-76a7-49aa-9b36-dd843baf20d0/"
                  class="glightbox"
                >
                  <img
                    class="img-fluid pb-3"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371684/4998d68a-6f29-456f-914c-72320c4a1b47.jpg"
                    alt=""
                  />
                </a>
                <h4>Aluminium Shower Towel Bar 32"</h4>
                <p class="price">J$363.00</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/3fa19472-76a7-49aa-9b36-dd843baf20d0/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a
                  href="https://virginsintltrading.fygaroshops.com/products/326cb180-f8da-4970-9efc-ce79f90d1131/"
                  class="glightbox"
                >
                  <img
                    class="img-fluid pb-3"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371706/afe2ca9f-f47a-4d51-bb85-8b7f1596385d.jpg"
                    alt=""
                  />
                </a>
                <h4 class="text-capitalize">Fixed Louvre Frame - 21FT</h4>
                <p class="price">J$3,458.12</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/326cb180-f8da-4970-9efc-ce79f90d1131/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->
            </div>
          </div>
          <!-- End Starter Menu Content -->

          <div class="tab-pane fade" id="menu-balcony" role="tabpanel">
            <div class="tab-header text-center">
              <h3>Balcony</h3>
            </div>

            <div class="row gy-5">
              <div class="col-lg-4 menu-item">
                <a
                  href="https://virginsintltrading.fygaroshops.com/products/feb7994a-c5d1-46cc-be93-208ae74e7e08/"
                  class="glightbox"
                >
                  <img
                    class="img-fluid pb-3"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371742/81160760-cded-4954-bfeb-9494b1b5ae61.jpg"
                    alt=""
                  />
                </a>
                <h4>Balcony Connector 90%</h4>
                <p class="price">J$2,586.38</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/feb7994a-c5d1-46cc-be93-208ae74e7e08/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a
                  href="https://virginsintltrading.fygaroshops.com/products/8f4d1246-34ac-432d-96dd-2364cd623476/"
                  class="glightbox"
                >
                  <img
                    class="img-fluid pb-3"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371745/4a1eb54b-85b1-4d14-9da6-dbae36239c34.jpg"
                    alt=""
                  />
                </a>
                <h4>Balcony Tubing Satin</h4>

                <p class="price">J$27,060.00</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/8f4d1246-34ac-432d-96dd-2364cd623476/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a
                  href="https://virginsintltrading.fygaroshops.com/products/7553faa2-9ace-44bb-93f8-5e0b435f43ab/"
                  class="glightbox"
                >
                  <img
                    class="img-fluid pb-3"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371744/0d647bac-ca6a-4a5c-b286-e51d18a4f64c.jpg"
                    alt=""
                  />
                </a>
                <h4>Balcony Tubing Connector</h4>
                <p class="price">J$1,773.75</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/7553faa2-9ace-44bb-93f8-5e0b435f43ab/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->
            </div>
          </div>
          <!-- End Breakfast Menu Content -->

          <div class="tab-pane fade" id="menu-shower" role="tabpanel">
            <div class="tab-header text-center">
              <h3>Shower</h3>
            </div>

            <div class="row gy-5">
              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-1.png" class="glightbox">
                  <img
                    class="img-fluid"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/393286/d1dcd5fa-c790-4d29-993a-5f184e0d2a33.png"
                    alt=""
                  />
                </a>
                <h4>Shower Mixer</h4>
                <p class="price">$30,225.00</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/ab4cf01d-844e-40c0-8d95-d864b3ddbf4d/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-1.png" class="glightbox">
                  <img
                    class="img-fluid"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371742/81160760-cded-4954-bfeb-9494b1b5ae61.jpg"
                    alt=""
                  />
                </a>
                <h4>Aut Luia</h4>
                <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
                <p class="price">$14.95</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/3fa19472-76a7-49aa-9b36-dd843baf20d0/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-1.png" class="glightbox">
                  <img
                    class="img-fluid"
                    src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371742/81160760-cded-4954-bfeb-9494b1b5ae61.jpg"
                    alt=""
                  />
                </a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">Lorem, deren, trataro, filede, nerada</p>
                <p class="price">$8.95</p>
                <a
                  class="btn-book-a-table px-4"
                  href="https://virginsintltrading.fygaroshops.com/products/3fa19472-76a7-49aa-9b36-dd843baf20d0/"
                  >Buy</a
                >
              </div>
              <!-- Menu Item -->
            </div>
          </div>
          <!-- End Starter Menu Content -->
        </div>
      </div>
    </section>
    <section id="testimonials" class="testimonials section-bg">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-header">
          <p>What Are They <span class="fw-bold">Saying About Us</span></p>
        </div>

        <div
          class="slides-1 swiper swiper-horizontal swiper-pointer-events aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="swiper-wrapper"
            style="
              transition-duration: 0ms;
              transform: translate3d(-6480px, 0px, 0px);
            "
          >
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="0"
              role="group"
              aria-label="2 / 4"
            >
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <!-- <img src="assets/img/testimonials/testimonials-2.jpg" class="img-fluid testimonial-img" alt=""> -->
                  </div>
                </div>
              </div>
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="1"
              role="group"
              aria-label="3 / 4"
            >
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <!-- <img src="assets/img/testimonials/testimonials-3.jpg" class="img-fluid testimonial-img" alt=""> -->
                  </div>
                </div>
              </div>
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="2"
              role="group"
              aria-label="4 / 4"
            >
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <!-- <img src="assets/img/testimonials/testimonials-4.jpg" class="img-fluid testimonial-img" alt=""> -->
                  </div>
                </div>
              </div>
            </div>

            <div
              class="swiper-slide"
              data-swiper-slide-index="0"
              role="group"
              aria-label="1 / 4"
            >
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <!-- <img src="assets/img/testimonials/testimonials-1.jpg" class="img-fluid testimonial-img" alt=""> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->

            <div
              class="swiper-slide"
              data-swiper-slide-index="1"
              role="group"
              aria-label="2 / 4"
            >
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <!-- <img src="assets/img/testimonials/testimonials-2.jpg" class="img-fluid testimonial-img" alt=""> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->

            <div
              class="swiper-slide"
              data-swiper-slide-index="2"
              role="group"
              aria-label="3 / 4"
            >
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <!-- <img src="assets/img/testimonials/testimonials-3.jpg" class="img-fluid testimonial-img" alt=""> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->
          </div>
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <span
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 1"
            ></span
            ><span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
              aria-current="true"
            ></span
            ><span
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
            ></span
            ><span
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 4"
            ></span>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
    </section>
    <section id="contact" class="">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-header">
          <p class="mb-5">Get In Touch <span class="fw-bold">With Us</span></p>
          <RouterLink
            :to="{ name: 'contact' }"
            class="btn-book-a-table py-3 px-5 fs-5"
            >Get In Touch</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="css" scoped>
.menu {
  background-color: #f8f8f8;
}
</style>
