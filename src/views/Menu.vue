<<template>
    <div>
        <home-plans></home-plans>

    <!--    <input id="datepicker" v-model="date">  -->
        <date-picker>Total</date-picker> 
        <boucher-conversions></boucher-conversions>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import DatePicker from '@/components/DatePicker';
import BoucherConversions from '@/components/BoucherConversions';

export default {
    name: 'Menu',
    components: {
        HomePlans,
        DatePicker,
        BoucherConversions
    },
    computed:{
        recipes() {
            return this.$store.state.recipes;
        },
        date() {
            return this.$store.state.date
        }
    },
    created() {
    this.property = 'Example property update.'
    alert("Created....");
    

  }
};
</script>

<style scoped>
</style>
