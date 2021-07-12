<template>
    <section id="about">
        <b-container class="white-subsection">
            <b-row>
                <b-col cols="12" lg="3" offset-lg="1" class="pl-lg-0 d-none d-lg-block">
                    <div>
                        <div class="about-us-logo"></div>
                    </div>
                </b-col>
                <b-col cols="12" lg="7" class="text-center text-lg-left">
                    <h2>OUR STORY</h2>
                    <p>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                        Duis sed odio sit amet nibh vulputate cursus
                    </p>
                    <p>
                        Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
                        ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <CustomBtn title="LEARN MORE"/>
                </b-col>
            </b-row>
        </b-container>
        <div class="video-wrapper">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <div class="video-wrapper__content">
                            <img src="@/assets/play-icon.png"
                                 @click="showModal = true"
                                 alt="play"
                            >
                            <Modal v-show="showModal"
                                   @close="showModal = false"
                            />
                            <h3>WATCH OUR STORY</h3>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  components: {Modal},
  data: () => ({
    showModal: false
  })
}
</script>

<style scoped lang="scss">
.white-subsection{
  padding-top: 30px;
  padding-bottom: 30px;

  h2 {
    color: $dark;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 30px;
  }
}
.video-wrapper {
  background-image: url('../../assets/video-bg.png');
  background-size: cover;

  &__content{
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;

    img {
      margin-bottom: 30px;
      cursor: pointer;
      transition: $transition;

      &:hover {
        transform: scale(1.1);
      }
    }

    h3 {
      font-size: 16px;
      font-family: Roboto, sans-serif;
      font-weight: 900;
      color: $white;
      margin-bottom: 0;
    }
  }
}
.about-us-logo{
  width: 235px; height: 229px;
  background: url('../../assets/css_sprites.png') -1630px -1100px;
}
@media (min-width: 960px) {
  .white-subsection {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .video-wrapper__content {
    padding-top: 200px;
    padding-bottom: 200px;
  }
}
</style>
