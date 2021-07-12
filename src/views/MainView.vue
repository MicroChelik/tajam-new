<template>
    <div>
        <Header />
        <main>
            <article>
                <MainSection />
                <OurStory />
                <Expertise />
                <Team />
                <OurWorks />
                <Reviews />
                <ContactUs />
            </article>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import MainSection from '@/components/sections/MainSection'
import OurStory from '@/components/sections/OurStory'
import Expertise from '@/components/sections/Expertise'
import Team from '@/components/sections/Team'
import OurWorks from '@/components/sections/OurWorks'
import Reviews from '@/components/sections/Reviews'
import ContactUs from '@/components/sections/ContactUs'
import Footer from '@/components/Footer'

export default {
  name: 'MainView',
  components: {
    Footer,
    ContactUs,
    Reviews,
    OurWorks,
    Team,
    Expertise,
    MainSection,
    OurStory,
    Header
  }
}
</script>

<style lang="scss" src="@/styles/main.scss" />
