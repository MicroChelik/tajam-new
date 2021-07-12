<template>
    <div class="main-section" id="home">
        <b-container>
            <b-row class="text-center">
                <b-col cols="12">
                    <h1>We Are Awesome Creative Agency</h1>
                    <Separator color="primary"/>
                    <p>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    </p>
                    <CustomBtn :title="'LEARN MORE'"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped lang="scss">
h1 {
  margin-bottom: 27px;
}

.separator {
  margin-bottom: 30px;
}

p {
  color: $white;
  margin-bottom: 53px;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 14pt;
  line-height: 24pt;
  word-spacing: 5px;
}

.main-section {
  padding: 160px 0 30px 0;
  background-image: url("../../assets/main-bg.png");
  background-size: cover;
  display: flex;
  align-items: center;
}

@media (min-width: 960px) {
  .main-section {
    min-height: 670px;
  }
}
</style>
