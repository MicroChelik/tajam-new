<template>
    <section class="section-contact" id="contact">
        <b-container>
            <b-row class="justify-content-center">
                <b-col cols="12" lg="6" class="text-center">
                    <h2>give us a good news</h2>
                    <form @submit.prevent="submitHandler">
                        <input type="text"
                               placeholder="Name"
                               v-model="name"
                               required
                        >
                        <input type="text"
                               placeholder="Email"
                               v-model="email"
                               required
                        >
                        <input type="text"
                               placeholder="Subject"
                               v-model="subject"
                               required
                        >
                        <textarea placeholder="Your Message"
                                  cols="30"
                                  rows="7"
                                  v-model="message"
                                  required
                        />
                        <CustomBtn title="SUBMIT" type="submit"/>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    subject: '',
    message: ''
  }),
  methods: {
    submitHandler() {
      let data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }
      alert(JSON.stringify(data))
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    }
  }
}
</script>

<style scoped lang="scss">
.section-contact {
  color: $dark;
  padding: 30px 0;

  h2 {
    margin-bottom: 35px;
  }

  input, textarea {
    margin-bottom: 23px;
    background-color: $white;
    color: rgba(65, 61, 75, 0.502);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 18px 20px;
    width: 100%;

    &::placeholder {
      color: rgba(65, 61, 75, 0.502);
    }

    &:focus-visible {
      outline: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

}

@media (min-width: 960px) {
  .section-contact {
    padding: 70px 0;
  }
}
</style>
