<template>
  <q-page class="container" style="background: #343E59;">
    <div class="row q-col-gutter-sm q-pt-sm">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-column></apex-column>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-donut></apex-donut>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-line></apex-line>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-multiple-radial-bars></apex-multiple-radial-bars>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-heatmap></apex-heatmap>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-radial-bar></apex-radial-bar>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-bubble></apex-bubble>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <apex-radar></apex-radar>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexColumn from 'components/KumpulanCharts/ApexColumn'
import ApexDonut from 'components/KumpulanCharts/ApexDonut'
import ApexLine from 'components/KumpulanCharts/ApexLine'
import ApexHeatmap from 'components/KumpulanCharts/ApexHeatmap'
import ApexMultipleRadialBars from 'components/KumpulanCharts/ApexMultipleRadialBars'
import ApexRadialBar from 'components/KumpulanCharts/ApexRadialBar'
import ApexBubble from 'components/KumpulanCharts/ApexBubble'
import ApexRadar from 'components/KumpulanCharts/ApexRadar'
export default {
  name: 'PageCharts',
  components: {
    ApexColumn,
    ApexDonut,
    ApexLine,
    ApexMultipleRadialBars,
    ApexHeatmap,
    ApexRadialBar,
    ApexBubble,
    ApexRadar
  }
}
</script>
