<template>
    <section class="section-advantages" id="expertise">
        <b-container>
            <b-row class="section-advantages__title">
                <b-col cols="12" class="text-center">
                    <h2>EXPERTISE</h2>
                    <p>Lorem ipsum dolor sit amet proin gravida nibh vel veit</p>
                    <Separator color="dark"/>
                </b-col>
            </b-row>
            <b-row class="align-items-end">
                <b-col cols="12" lg="4" class="section-advantages__advantage">
                    <img src="@/assets/desktop-icon.png" alt="desktop">
                    <p class="section-advantages__advantage__title">WEB DESIGN & DEVELOPMENT</p>
                    <p class="section-advantages__advantage__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean</p>
                </b-col>
                <b-col cols="12" lg="4" class="section-advantages__advantage">
                    <img src="@/assets/paintbrush.png" alt="paintbrush">
                    <p class="section-advantages__advantage__title">BRANDING IDENTITY</p>
                    <p class="section-advantages__advantage__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean</p>
                </b-col>
                <b-col cols="12" lg="4" class="section-advantages__advantage">
                    <img src="@/assets/mobile-icon.png" alt="mobile-icon">
                    <p class="section-advantages__advantage__title">MOBILE APP</p>
                    <p class="section-advantages__advantage__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean</p>
                </b-col>
                <Separator class="w-100 section-advantages__separator d-none d-lg-block" color="dark"/>
                <b-col cols="12" lg="4" class="section-advantages__advantage">
                    <img src="@/assets/chart-icon.png" alt="chart-icon">
                    <p class="section-advantages__advantage__title">SEARCH ENGINE OPTIMIZATION</p>
                    <p class="section-advantages__advantage__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean</p>
                </b-col>
                <b-col cols="12" lg="4" class="section-advantages__advantage">
                    <img src="@/assets/game-icon.png" alt="game-icon">
                    <p class="section-advantages__advantage__title">GAME DEVELOPMENT</p>
                    <p class="section-advantages__advantage__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean</p>
                </b-col>
                <b-col cols="12" lg="4" class="section-advantages__advantage">
                    <img src="@/assets/heart-icon.png" alt="heart-icon">
                    <p class="section-advantages__advantage__title">MADE WITH LOVE</p>
                    <p class="section-advantages__advantage__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean</p>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<style scoped lang="scss">
.section-advantages{
  padding: 30px 0;
  color: $dark;

  &__advantage {
    text-align: center;
    margin-bottom: 40px;

    img {
      margin-bottom: 35px;
    }

    &__title {
      font-family: Roboto, sans-serif;
      font-size: 14px;
      font-weight: 900;
      margin-bottom: 25px;
    }

    &__description {
      font-family: Roboto, sans-serif;
      font-size: 14px;
      line-height: 22px;
      font-weight: 100;
      margin-bottom: 0;
      max-width: 80%;
      display: flex;
      margin: auto;
    }
  }

  &__title {
    margin-bottom: 80px;

    h2, p {
      margin-bottom: 17px;
    }
  }

  &__separator {
    margin-bottom: 40px;
  }

}

@media (min-width: 960px) {
  .section-advantages {
    padding: 70px 0 100px 0;

    &__advantage {
      text-align: center;

      &:nth-last-child(-n + 3) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
