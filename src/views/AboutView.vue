<script setup>
import PageTitle from "../components/PageTitle.vue";
import image from  '../assets/img/Impact image.jpg' 

</script>

<template>
  <PageTitle title="About" />
  <div class="about mx-5 px-sm-5">
    <section class="row pb-0">
      <section class="col-sm-4 col-md-6 pt-0 pb-3">
        <h1 class="display-6 fw-bold primary">We're tightly connected to our communities</h1>
      </section>
      <section class="offset-sm-2 offset-md-0 col-sm-6 col-md-6 pt-1">
        <p class="fs-5">
          Virgin’s international trading one of the leading distributors of
          aluminum products is located at 18 Chisholm Ave, Kingston 13 and was
          established out of a need to provide aluminum fabricators with an
          affordable alternative. We currently distribute aluminum extrusions in
          various colours for windows and doors, storefronts, signs, showers and
          showcases. We also have in stock a wide range of exotic tempered
          shower enclosures as well as products for Louvre windows, awnings,
          decorative aluminum fencing, fixed mesh frames, our exclusive
          retractable mesh frames and all related hardware. Virgin’s
          International Trading Limited was founded in 2005 by Garfield Virgin,
          who had a vision of providing high quality aluminum extrusion and
          hardware supplies at an affordable cost. Over the years Virgin’s
          International has consistently delivered on this promise and can now
          be considered as one of the leading aluminum extrusion company in
          Jamaica. We pride our self on excellent customer service by building
          strong relationships with our clients. The company has always
          emphasized customer satisfaction and systematically built a reputation
          for consistency by sourcing the highest quality products and
          reliability particularly in the area of island wide delivery. The job
          of guaranteeing a great customer experience comes through the combined
          efforts of our dedicated employees who work closely together to ensure
          that only the very best products and services reach our customers.
        </p>
      </section>
    </section>
    <section class="row pt-2 pt-sm-3">
      <section class="col-sm-4 col-md-6 pb-2">
        <img :src='image' class="img-fluid" alt="" />
        <!-- <img class="img-fluid" src="https://fygaro-subscribers.s3.amazonaws.com/65591e0e-ee6c-4aeb-9f77-8a260c61dae0/products/371742/81160760-cded-4954-bfeb-9494b1b5ae61.jpg"
 alt="" /> -->
      </section>
      <section class="offset-sm-2 offset-md-0 col-sm-6 col-md-6">
        <h1 class="display-6 fw-bold primary">We're Making a Positive Impact Across Jamaica.</h1>
        <p class="fs-5">
          Virgin’s International Trading Limited is known for its community
          support and civic duties. Our community work includes the adoption of
          Top Hill Primary School in Manchester and donations to various police
          community projects. We believe in serving our community for a better
          tomorrow.
        </p>
      </section>
    </section>
  </div>
</template>

<style>

.primary {
  color: var(--color-primary);
}
@media (min-width: 1024px) {
  .about {
 

    align-items: center;
  }
}
</style>
