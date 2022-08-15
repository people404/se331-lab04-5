<template>
  <h1>Passengers number</h1>
  <div class="Passengers">
    <PassengerCard
      v-for="Passenger in passengers"
      :key="Passenger.id"
      :Passenger="Passenger"
    ></PassengerCard>
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'HomeView', query: { page: page - 1, limit: limit } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'HomeView', query: { page: page + 1, limit: limit } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page</router-link
      >
    </div>
    <div class="perNum">
      <router-link
        id="sub-page"
        :to="{ name: 'HomeView', query: { page: page, limit: limit - 1 } }"
        rel="next"
        v-if="limit != 1"
      >
        Sub Limit</router-link
      >
      <router-link
        id="add-page"
        :to="{ name: 'HomeView', query: { page: page, limit: limit + 1 } }"
        rel="prev"
        v-if="hasAddPage"
      >
        Add Limit</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from "@/components/PassengerCard.vue";
import PassengerService from "@/services/PassengerService.js";
import { watchEffect } from "@vue/runtime-core";
export default {
  name: "HomeView",
  props: {
    page: {
      type: Number,
      require: true,
    },
    limit: {
      type: Number,
      require: true,
    },
  },
  components: {
    PassengerCard,
  },
  data() {
    return {
      passengers: null,
      totalPassengers: 0,
    };
  },
  created() {
    watchEffect(() => {
      PassengerService.getPassengers(this.page, this.limit)
        .then((response) => {
          this.passengers = response.data;
          this.totalPassengers = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  computed: {
    hasNextPage() {
      let totalPassengers = Math.ceil(this.totalPassengers / this.limit);
      return this.page < totalPassengers;
    },

    hasAddPage() {
      return this.limit < 9;
    },
  },
  // methods: {
  //   add_page() {
  //     if (this.perPage < 9) {
  //       this.perPage++
  //     }
  //   },
  //   sub_page() {
  //     if (this.perPage > 1) {
  //       this.perPage--
  //     }
  //   }
  // }
};
</script>
<style scoped>
.Passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
.perNum {
  display: flex;
  width: 290px;
}
.perNum a {
  flex: 1;
  text-decoration: none;
  color: #151b21;
}
#sub-page {
  text-align: left;
}
#add-page {
  text-align: right;
}
</style>
