<template>
    <header>
        <b-container>
            <b-row class="justify-content-between">
                <b-col cols="12" lg="2">
                    <div class="logo-wrapper">
                        <img src="@/assets/logo.png" alt="logo">
                        <p>tajam</p>
                    </div>
                </b-col>
                <b-col cols="12" lg="7">
                    <nav class="d-flex align-items-center justify-content-between h-100">
                        <NavBtn v-for="btn of navbar_buttons" :title="btn.title" :id="btn.id" :key="btn.title"/>
                    </nav>
                </b-col>
            </b-row>
        </b-container>
    </header>
</template>

<script>
import NavBtn from '@/components/NavBtn'

export default {
  name: 'Header',
  components: {NavBtn},
  data: () => ({
    navbar_buttons: [
      {
        title: 'HOME',
        id: 'home'
      },
      {
        title: 'ABOUT',
        id: 'about'
      },
      {
        title: 'EXPERTISE',
        id: 'expertise'
      },
      {
        title: 'TEAMS',
        id: 'team'
      },
      {
        title: 'WORKS',
        id: 'works'
      },
      {
        title: 'PEOPLE SAY',
        id: 'reviews'
      },
      {
        title: 'CONTACT',
        id: 'contact'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding-top: 15px;
}

.logo-wrapper {
  justify-content: center;
}

.nav-btn {
  white-space: nowrap;
  flex: 0 0 23%;
  max-width: 23%;
  margin-bottom: 7px;
}

nav {
  flex-wrap: wrap;
  margin-top: 10px;
}

@media (min-width: 960px) {
  .nav {
    margin-top: 0;
  }

  .logo-wrapper {
    justify-content: start;
  }

  .nav-btn {
    white-space: nowrap;
    flex: unset;
    max-width: unset;
    margin-bottom: 0;
  }
}
</style>
