const app = Vue.createApp({
  template: "",
  data() {
    return {
      firstName: "Yaman",
      lastName: "Kahveci",
      gender: "female",
      email: "yaman.kahveci993@gmail.com",
      picture: "https://randomuser.me/api/portraits/women/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.gender = results[0].gender;
      this.email = results[0].email;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
