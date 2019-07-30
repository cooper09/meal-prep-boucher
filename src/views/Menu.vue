<template>
    <div>
        <home-plans></home-plans>
        <boucher-conversions></boucher-conversions>
        <google-conversions>Google</google-conversions>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import BoucherConversions from '@/components/BoucherConversions';
import GoogleConversions from '@/components/GoogleConversions';

export default {
    name: 'Menu',
    components: {
        HomePlans,
        BoucherConversions,
        GoogleConversions
    }
};
</script>

<style scoped>
</style>
