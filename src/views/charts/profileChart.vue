<template>
  <div class="chart-container">
    <chart height="50%" width="100%" />
    <LineChart height="50%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/Profile'
import LineChart from '@/components/Charts/Line'

export default {
  name: 'ProfileChart',
  components: { Chart, LineChart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

