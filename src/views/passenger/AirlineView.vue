<template>
  <div v-if="airline">
    <h2>{{ airline.AirlineName }}</h2>
    <h4>{{ airline.email }}</h4>
    <h4>{{ airline.address }}</h4>
  </div>
</template>
<script>
export default {
  props: ["airline"],
};
</script>
