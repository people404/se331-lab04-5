<template>
  <div v-if="passenger">
    <h1>{{ passenger.first_name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'PassengerDetail', params: { getid } }"
        >Details</router-link
      >|
      <router-link :to="{ name: 'Airline', params: { getid } }"
        >Airline</router-link
      >
    </div>
    <router-view :passenger="passenger" :airline="airline" />
  </div>
</template>

<script>
import PassengerService from "@/services/PassengerService";
export default {
  props: {
    id: {
      type: Number,
      require: true,
      default: 1,
    },
  },
  data() {
    return {
      passenger: null,
      airline: null,
    };
  },
  methods: {
    getid() {
      return this.$route.params.id;
    },
  },
  created() {
    if (this.$route.params.id > 12) {
      this.$router.push("/NotF");
    }
    PassengerService.getPassenger(this.$route.params.id)
      .then((response) => {
        this.passenger = response.data;
        console.log(this.passenger);
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$route.push({
            name: "404Resource",
            params: { resource: "event" },
          });
        } else {
          this.$route.push({ name: "NetworkError" });
        }
      });
    PassengerService.getAirline(this.$route.params.id)
      .then((response) => {
        this.airline = response.data;
        console.log(this.airline);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
