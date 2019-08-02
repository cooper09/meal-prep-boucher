<template>
    <span>
        Chart D3
        <chart-component></chart-component>


    </span>
</template>

<script>
import ChartComponent from '@/components/ChartComponent';

export default {
    name: 'chart',
    components: {
        ChartComponent
    },
    created() {
        //this.$store.dispatch('getCampaigns');
        //this.$store.dispatch('getConversions');
    } //end created
};
</script>
