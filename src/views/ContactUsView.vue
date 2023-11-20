<template>
  <PageTitle title="Contact" />
  <section id="contact" class="contact">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-header">
        <p>Need Help? <span>Contact Us</span></p>
      </div>

      <div class="mb-3">
        <iframe
          style="border: 0; width: 100%; height: 350px"
          src="https://maps.google.com/maps?q=18%20chisolm%20avenue&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          allowfullscreen=""
        ></iframe>
      </div>

      <!-- End Google Maps -->

      <div class="row gy-4">
        <div class="col-md-6">
          <div class="info-item d-flex align-items-center">
            <i class="icon bi bi-map flex-shrink-0"></i>
            <div>
              <h3>Our Address</h3>
              <p>18 Chisholm Avenue, Kingston 13</p>
            </div>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-md-6">
          <div class="info-item d-flex align-items-center">
            <i class="icon bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>virgins.intltrading18@gmail.com</p>
            </div>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-md-6">
          <div class="info-item d-flex align-items-center">
            <i class="icon bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p><strong>Phone: </strong>(876) 754-1318</p>
              <p><strong>Phone: </strong>(876) 906-1934</p>
              <p><strong>Phone: </strong>(876) 906-0736</p>
              <p><strong>WhatsApp/Phone: </strong>(876) 335-9795</p>
            </div>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-md-6">
          <div class="info-item d-flex align-items-center">
            <i class="icon bi bi-share flex-shrink-0"></i>
            <div>
              <h3>Opening Hours</h3>
              <div>
                <strong>Mon-Fri:</strong> 8AM - 5PM <br>
                <strong>Saturday - Sunday:</strong> Closed
              </div>
            </div>
          </div>
        </div>
        <!-- End Info Item -->
      </div>

      <form
        action="forms/contact.php"
        method="post"
        role="form"
        class="php-email-form p-3 p-md-4"
      >
        <div class="row">
          <div class="col-xl-6 form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              placeholder="Your Name"
              required=""
            />
          </div>
          <div class="col-xl-6 form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required=""
            />
          </div>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required=""
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required=""
          ></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
      <!--End Contact Form -->
    </div>
  </section>
</template>

<script setup>
import PageTitle from "../components/PageTitle.vue";
</script>

<style lang="css" scoped>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
