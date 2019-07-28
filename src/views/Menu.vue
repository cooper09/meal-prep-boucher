<template>
    <div>
        <home-plans></home-plans>
        <meal-recipes></meal-recipes>
        <boucher-conversions></boucher-conversions>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import MealRecipes from '@/components/MealRecipes';
import BoucherConversions from '@/components/BoucherConversions';

export default {
    name: 'Menu',
    components: {
        HomePlans,
        MealRecipes,
        BoucherConversions
    }
};
</script>

<style scoped>
</style>
