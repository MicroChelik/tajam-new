<template>
    <section class="section-team" id="team">
        <b-container>
            <b-row class="section-team__title">
                <b-col cols="12" class="text-center">
                    <h2>MEET OUR AMAZING TEAM</h2>
                    <p>Lorem ipsum dolor sit amet proin gravida nibh vel veit</p>
                    <Separator color="white"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3"
                       v-for="(employee, index) of employees"
                       :key="employee.name + index"
                >
                    <div class="section-team__employee">
                        <div class="section-team__employee__img"></div>
                        <div class="section-team__employee__description">
                            <p class="section-team__employee__title">{{ employee.name }}</p>
                            <p class="section-team__employee__subtitle">{{ employee.position }}</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="text-center">
                    <p class="mb-4">Become part of our dream team, let’s join us !</p>
                    <CustomBtn title="WE ARE HIRING" />
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
  data: () => ({
    employees: [
      {
        name: 'SEMF UCUK',
        position: 'CEO & FOUNDER'
      },
      {
        name: 'DIK ADALIN',
        position: 'ENGINEERING'
      },
      {
        name: 'JENG KOL',
        position: 'DESIGNER'
      },
      {
        name: 'PET ROMAK',
        position: 'MARKETING'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
.section-team {
  padding: 30px 0;
  background-image: url('../../assets/team-bg.png');
  background-size: cover;
  color: $white;

  &__title {
    margin-bottom: 50px;

    h2, p {
      margin-bottom: 17px;
    }
  }

  &__employee{
    margin-bottom: 70px;

    &__img {
      background-color: #f5f4f7;
      width: 100%;
      height: 230px;
    }

    &__description {
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 22px 0 24px 0;
      text-align: center;
    }

    &__title {
      font-family: Roboto, sans-serif;
      font-weight: 900;
      margin-bottom: 12px;
    }

    &__subtitle {
      font-family: Roboto, sans-serif;
      font-weight: 100;
      margin-bottom: 0;
    }
  }
}

@media (min-width: 960px) {
  .section-team {
    padding: 70px 0;
  }
}
</style>
