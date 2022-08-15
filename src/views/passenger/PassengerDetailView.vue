<template>
  <div v-if="passenger">
    <h2>{{ passenger.first_name }} {{ passenger.last_name }}</h2>
    <h4>email:{{ passenger.email }}</h4>
    <h4>gender:{{ passenger.gender }}</h4>
    <h4>ip_address:{{ passenger.ip_address }}</h4>
    <h4>source:{{ passenger.Source }}</h4>
    <h4>destination: {{ passenger.Destination }}</h4>
    <h4>travelDate {{ passenger.travelDate }}</h4>
    <h4>{{ passenger.airlineId }}</h4>
  </div>
</template>
<script>
export default {
  props: ["passenger"],
};
</script>
