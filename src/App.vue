<script>
import Header from "@/components/Header.vue";
import DiagramBlock from "@/components/DiagramBlock.vue";
import RoundDiagram from "@/components/RoundDiagram.vue";
import BarChart from "@/components/BarChart.vue";
import SecondIndicator from "@/components/SecondIndicator.vue";
import StatsContainer from "@/components/StatsContainer.vue";
import VerticalSeparator from "@/components/VerticalSeparator.vue";
import {RealTime, DistributionChannel, Distributors, Territory} from '@/assets/data'
export default {
  components: {Header, DiagramBlock, RoundDiagram, BarChart, SecondIndicator, StatsContainer, VerticalSeparator},
  data(){
    return{
      RealTime, DistributionChannel, Distributors, Territory
    }
  }
}

</script>

<template>
  <Header/>
  <div class="diagrams">
    <DiagramBlock :data="RealTime" id="real-time-container">
      <BarChart :chartData="RealTime.operative" :heightParent="100"/>
      <RoundDiagram :chartData="RealTime.years"/>
      <SecondIndicator :chartData="RealTime.lastYear"/>
    </DiagramBlock>
    <DiagramBlock :data="DistributionChannel" class="big-container" id="distributor-container">
      <StatsContainer :chartData="DistributionChannel.numberOfAppearance"/>
      <BarChart :chartData="DistributionChannel.okbKCBakb" :heightParent="100"/>
      <StatsContainer :chartData="DistributionChannel.averageSKU"/>
      <RoundDiagram :chartData="DistributionChannel.visitTT"/>
    </DiagramBlock>
    <DiagramBlock :data="Distributors" class="big-container">
      <template #main>
        <StatsContainer :chartData="Distributors.completeFEM"/>
        <RoundDiagram :chartData="Distributors.saleOut"/>
        <RoundDiagram :chartData="Distributors.visitDistributive"/>
        <StatsContainer :chartData="Distributors.numberOfAppearance"/>
      </template>
      <template #side>
        <BarChart :chartData="Distributors.mma" :heightParent="200"/>
        <BarChart :chartData="Distributors.okbAKBtt" :heightParent="200"/>
      </template>
    </DiagramBlock>
    <DiagramBlock :data="Territory" id="territory-container">
      <BarChart :chartData="Territory.chicago" :heightParent="200"/>
      <BarChart :chartData="Territory.availability" :heightParent="200"/>
    </DiagramBlock>
  </div>
</template>

<style scoped>

</style>
