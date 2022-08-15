<template>
  <router-link
    class="Passenger-link"
    :to="{ name: 'PassengerLayout', params: { id: Passenger.id } }"
  >
    <div class="Passenger-card">
      <h4>{{ Passenger.first_name }} {{ Passenger.last_name }}</h4>
      <h4>email:{{ Passenger.email }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "PassengerCard",
  props: {
    Passenger: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.Passenger-link {
  color: #2c3e50;
  text-decoration: none;
}

.Passenger-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.Passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
