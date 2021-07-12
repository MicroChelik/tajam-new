<template>
    <section class="section-reviews" id="reviews">
        <b-container>
            <b-row class="justify-content-center">
                <b-col cols="12" lg="10">
                    <p class="section-reviews__title">“</p>
                    <div>
                        <div class="section-reviews__review"
                             v-show="picked === 'reviewer1'"
                        >
                            <p class="section-reviews__review__text">
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida
                                nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit.
                            </p>
                            <p class="section-reviews__review__author">lana galadriel</p>
                            <p class="section-reviews__review__position">ceo tengkurep</p>
                        </div>
                        <div class="section-reviews__review"
                             v-show="picked === 'reviewer2'"
                        >
                            <p class="section-reviews__review__text">
                                Aenean sollicitudin, lorem quis
                                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                                mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                                auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.
                            </p>
                            <p class="section-reviews__review__author">michael galadriel</p>
                            <p class="section-reviews__review__position">ceo tengkurep</p>
                        </div>
                        <div class="section-reviews__review"
                             v-show="picked === 'reviewer3'"
                        >
                            <p class="section-reviews__review__text">
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida
                                nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                                mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                                auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.
                            </p>
                            <p class="section-reviews__review__author">jane galadriel</p>
                            <p class="section-reviews__review__position">ceo tengkurep</p>
                        </div>
                        <div class="section-reviews__review"
                             v-show="picked === 'reviewer4'"
                        >
                            <p class="section-reviews__review__text">
                                Nam nec tellus a odio tincidunt
                                auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.
                            </p>
                            <p class="section-reviews__review__author">diana galadriel</p>
                            <p class="section-reviews__review__position">ceo tengkurep</p>
                        </div>
                        <div class="section-reviews__review"
                             v-show="picked === 'reviewer5'"
                        >
                            <p class="section-reviews__review__text">
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida
                                nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                                mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                                auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.
                            </p>
                            <p class="section-reviews__review__author">alex galadriel</p>
                            <p class="section-reviews__review__position">ceo tengkurep</p>
                        </div>
                    </div>
                    <div class="section-reviews__photos">
                        <input type="radio" id="reviewer1" value="reviewer1" v-model="picked">
                        <label for="reviewer1">
                            <div>
                                <img src="@/assets/reviewer1.png" alt="reviewer" :class="picked === 'reviewer1' ? 'active' : ''">
                            </div>
                        </label>

                        <input type="radio" id="reviewer2" value="reviewer2" v-model="picked">
                        <label for="reviewer2">
                            <div>
                                <img src="@/assets/reviewer2.png" alt="reviewer" :class="picked === 'reviewer2' ? 'active' : ''">
                            </div>
                        </label>

                        <input type="radio" id="reviewer3" value="reviewer3" v-model="picked">
                        <label for="reviewer3">
                            <div>
                                <img src="@/assets/reviewer3.png" alt="reviewer" :class="picked === 'reviewer3' ? 'active' : ''">
                            </div>
                        </label>

                        <input type="radio" id="reviewer4" value="reviewer4" v-model="picked">
                        <label for="reviewer4">
                            <div>
                                <img src="@/assets/reviewer4.png" alt="reviewer" :class="picked === 'reviewer4' ? 'active' : ''">
                            </div>
                        </label>

                        <input type="radio" id="reviewer5" value="reviewer5" v-model="picked">
                        <label for="reviewer5">
                            <div>
                                <img src="@/assets/reviewer5.png" alt="reviewer" :class="picked === 'reviewer5' ? 'active' : ''">
                            </div>
                        </label>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
  data: () => ({
    picked: 'reviewer3',
  }),
}
</script>

<style scoped lang="scss">
.section-reviews {
  color: $white;
  background-image: url('../../assets/reviews-bg.png');
  background-size: cover;
  text-align: center;
  padding: 30px 0;

  &__title {
    font-family: 'Playfair Display', serif;
    font-size: 100px;
    font-weight: 400;
    line-height: 70px;
  }

  &__review{
    min-height: 290px;
    margin-bottom: 20px;

    &__text {
      font-family: 'Playfair Display', serif;
      font-weight: 400;
      margin-bottom: 45px;
    }

    &__author {
      font-family: Roboto, sans-serif;
      font-weight: 900;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    &__position {
      font-family: Roboto, sans-serif;
      font-weight: 100;
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }

  &__photos {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80px;

    input {
      display: none;
    }

    img {
      max-width:60px;
      max-height: 60px;
      width: 60px;
      height: 60px;
      transition: $transition;
      transform: scale(0.6);
      cursor: pointer;
    }

    div {
      transition: $transition;
    }

    .active{
      transform: scale(1);
    }
  }
}

@media (min-width: 960px) {
  .section-reviews {
    padding: 65px 0;

    &__title {
      line-height: normal;
      margin-bottom: 45px;
    }

    &__photos img {
      max-width: 75px;
      max-height: 75px;
      width: 75px;
      height: 75px;
    }

    &__review {
      margin-bottom: 45px;
      min-height: 201px;
    }
  }
}
</style>
