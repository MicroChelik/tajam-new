<template>
    <footer class="footer text-lg-left text-center">
        <b-container>
            <b-row>
                <b-col cols="12" lg="4">
                    <div class="logo-wrapper">
                        <img src="@/assets/logo.png" alt="logo">
                        <p>tajam</p>
                    </div>
                    <p>
                        lorem quis bibendum auctor, nisi elit consequat ipsum,
                        nec sagittis sem nibh elit. Duis sed
                        odio sit amet auctror a ornare odio non mauris vitae erat in elit
                    </p>
                </b-col>
                <b-col cols="12" lg="4">
                    <p class="footer__title">our studio</p>
                    <div class="footer__contact">
                        <img src="@/assets/address-icon.png" alt="address">
                        <p>
                            Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia
                        </p>
                    </div>
                    <div class="footer__contact">
                        <img src="@/assets/address-icon.png" alt="address">
                        <p>
                            <a href="tel:+622122243333">(+62) 21-2224 3333</a>
                        </p>
                    </div>
                </b-col>
                <b-col cols="12" lg="4">
                    <p class="footer__title">stay in touch</p>
                    <div>
                        <form @submit="submitHandler"
                              class="footer__form"
                        >
                            <input type="text"
                                   placeholder="Subscribe our newsletter"
                                   v-model="email"
                                   class="footer__form__input"
                            >
                            <button type="submit">
                                <img src="@/assets/btn-arrow.png" alt="subscribe">
                            </button>
                        </form>
                    </div>
                    <div class="footer__social">
                        <a href="">
                            <img src="@/assets/facebook.png" alt="facebook">
                        </a>
                        <a href="">
                            <img src="@/assets/twitter.png" alt="twitter">
                        </a>
                        <a href="">
                            <img src="@/assets/dribbble.png" alt="dribbble">
                        </a>
                        <a href="">
                            <img src="@/assets/instagram.png" alt="instagram">
                        </a>
                        <a href="">
                            <img src="@/assets/gplus.png" alt="gplus">
                        </a>
                        <a href="">
                            <img src="@/assets/youtube.png" alt="youtube">
                        </a>
                    </div>
                </b-col>
            </b-row>
            <b-row class="justify-content-between">
                <b-col cols="12" lg="4" class="mb-3 mb-lg-0">
                    <nav class="d-flex align-items-center justify-content-between h-100">
                        <NavBtn v-for="btn of navbar_buttons" :title="btn.title" :key="btn.title"/>
                    </nav>
                </b-col>
                <b-col cols="12" lg="6">
                    <p class="text-center text-lg-right mb-0">Copyright © 2015 - Tajem Creative</p>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
import NavBtn from '@/components/NavBtn'

export default {
  name: 'Footer',
  components: {NavBtn},
  data: () => ({
    navbar_buttons: [
      {
        title: 'HELP'
      },
      {
        title: 'TERMS & CONDITION'
      },
      {
        title: 'PRIVACY'
      }
    ],
    email: ''
  }),
  methods: {
    submitHandler() {
      alert(this.email)
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  color: $white;
  padding: 30px 0;
  background-image: url('../assets/footer-bg.png');
  background-size: cover;

  &__contact {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 23px;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      margin-right: 17px;
      padding-top: 2px;
    }

    p {
      margin-bottom: 0;
    }
  }

  &__title {
    text-transform: uppercase;
    margin-bottom: 17px;
    margin-top: 17px;
    font-family: Roboto, sans-serif;
    font-weight: 900;
  }

  .logo-wrapper {
    margin-bottom: 27px;
  }

  &__form {
    display: flex;
    align-items: center;
    margin-bottom: 27px;

    &__input {
      background: none;
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: rgba(255, 255, 255, 0.749);
      height: 46px;
      width: 100%;
      padding-left: 15px;
      padding-right: 7px;
      margin-right: 10px;
      transition: $transition;

      &:focus-visible {
        outline: 1px solid rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 46px;
      width: 70px;
      border: none;
      transition: $transition;
      background-color: rgba(255, 255, 255, 0.5);

      &:hover {
        background-color: rgba(255, 255, 255, 0.9);
      }
    }
  }

  &__social{
    a {
      margin-right: 8px;
      transition: $transition;

      &:hover {

      }

      &:last-child {
        margin-right: 0;
      }
    }

    img {
      transition: $transition;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  &__contact {
    a {
      color: $white;
      transition: $transition;

      &:hover {
        color: $primary;
      }
    }
  }

  .row {
    &:nth-child(1) {
      margin-bottom: 30px;
    }
  }

  .logo-wrapper {
    justify-content: center;
  }
}

@media (min-width: 960px) {
  .footer {
    padding: 30px 0;

    &__contact {
      justify-content: start;
    }

    &__title {
      margin-bottom: 30px;
    }

    .row {
      &:nth-child(1) {
        margin-bottom: 65px;
      }
    }

    .logo-wrapper {
      justify-content: start;
    }
  }
}
</style>
