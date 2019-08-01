<template>
    <div>
        <home-plans></home-plans>
        <kalendar></kalendar>
        <boucher-conversions></boucher-conversions>
        <google-conversions>Google</google-conversions>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import Kalendar from '@/components/Kalendar'
import BoucherConversions from '@/components/BoucherConversions';
import GoogleConversions from '@/components/GoogleConversions';

export default {
    name: 'Menu',
    components: {
        HomePlans,
        Kalendar,
        BoucherConversions,
        GoogleConversions
    }
};
</script>

<style scoped>
</style>
