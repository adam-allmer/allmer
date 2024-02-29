<template>
  <span id="age">{{ kaiserAge }}</span>
</template>

<style scoped>
#age {
  display: inline;
}
</style>
  
<script>
export default {
  data() {
    return {
      kaiserAge: '',
      //myName: '',
      //myPhone: '',
      //myEmail: '',
      //kaiserAbout: ''
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('/js/info.json')
        .then(response => response.json())
        .then(data => {
          this.calculateAge(data.Kaiser.birthday);
          //this.myName = `${data.Adam.firstname} ${data.Adam.lastname}`;
          //this.myPhone = data.Adam.phone;
          //this.myEmail = data.Adam.email;
          //this.kaiserAbout = data.Kaiser.about;
        })
        .catch(err => console.error(err));
    },
    calculateAge(birthdayStr) {
      const birthday = new Date(birthdayStr);
      const today = new Date();
      let ageYears = today.getFullYear() - birthday.getFullYear();
      let ageMonths = today.getMonth() - birthday.getMonth();
      if (today.getDate() < birthday.getDate()) {
        ageMonths--;
      }
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }
      const yearWord = ageYears === 1 ? 'year' : 'years';
      const monthWord = ageMonths === 1 ? 'month' : 'months';
      this.kaiserAge = `${ageYears} ${yearWord} and ${ageMonths} ${monthWord}`;
    }
  }
};
</script>
  