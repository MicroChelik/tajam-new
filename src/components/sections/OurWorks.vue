<template>
    <section class="section-works" id="works">
        <b-container>
            <b-row class="section-works__title">
                <b-col cols="12" lg="6" class="text-lg-left text-center">
                    <h2>OUR WORKS</h2>
                </b-col>
                <b-col cols="12" lg="6">
                    <div class="section-works__all">
                        <p class="mr-1 mb-0">See All Project in dribble</p>
                        <div class="bg-arrow"></div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid>
            <b-row class="section-works__items">
                <b-col cols="4"
                       lg="2"
                       class="px-0"
                       v-for="(work, index) of works"
                       :key="work.bg + index"
                >
                    <div class="section-works__item"
                         :style="`background-image: url('${work.bg}')`"
                    >
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row class="section-works__footer">
                <b-col cols="12" class="text-center">
                    <CustomBtn title="LOAD MORE"/>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
  data: () => ({
    works: [
      {
        bg: 'https://nutnet.ru/img/works/preview-spiti-android.jpg',
        href: 'https://nutnet.ru/portfolio/spiti-android'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-binotrade.jpg',
        href: 'https://nutnet.ru/portfolio/binotrade'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-spiti-android.jpg',
        href: 'https://nutnet.ru/portfolio/spiti-android'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-binotrade.jpg',
        href: 'https://nutnet.ru/portfolio/binotrade'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-spiti-android.jpg',
        href: 'https://nutnet.ru/portfolio/spiti-android'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-binotrade.jpg',
        href: 'https://nutnet.ru/portfolio/binotrade'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-spiti-android.jpg',
        href: 'https://nutnet.ru/portfolio/spiti-android'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-binotrade.jpg',
        href: 'https://nutnet.ru/portfolio/binotrade'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-spiti-android.jpg',
        href: 'https://nutnet.ru/portfolio/spiti-android'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-binotrade.jpg',
        href: 'https://nutnet.ru/portfolio/binotrade'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-spiti-android.jpg',
        href: 'https://nutnet.ru/portfolio/spiti-android'
      },
      {
        bg: 'https://nutnet.ru/img/works/preview-binotrade.jpg',
        href: 'https://nutnet.ru/portfolio/binotrade'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
.section-works{
  color: $dark;

  &__title {
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
  }

  &__item {
    height: 100px;
    background-size: cover;
    cursor: pointer;
    transition: $transition;
    filter: grayscale(0.9);

    &:hover {
      filter: unset;
    }
  }

  &__footer {
    padding: 30px 0;
  }

  &__all {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .bg-arrow {
      width: 8px; height: 13px;
      background: url('../../assets/css_sprites.png') -2786px -1100px;
      transition: $transition;
    }

    &:hover {
      .bg-arrow {
        transform: translateX(5px);
      }
    }
  }
}

@media (min-width: 960px) {
  .section-works{

    &__title {
      padding: 70px 0;
    }

    &__item {
      height: 200px;
    }

    &__footer {
      padding: 70px 0;
    }

    &__all {
      justify-content: flex-end;
    }
  }
}
</style>
