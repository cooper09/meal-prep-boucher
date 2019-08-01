<template>
    <div>
        <v-menu>
            Date Picker {{date}}
            <v-text-field :value="start" slot="activator" label="Start Date" prepend-icon="date_range">Menu Field</v-text-field>
            <v-date-picker v-model="start">yo</v-date-picker>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'DatePicker',
    data() {
        return {
            start: null
        }
    },
    components: {
    },
    computed: {
        date() {
            return this.$store.state.date;
        }//end date
    }//end compoure
};//end export default
</script>

<style scoped>
</style>
