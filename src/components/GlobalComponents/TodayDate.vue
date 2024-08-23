<!-- src/components/GlobalComponents/TodayDate.vue -->
<template>
    <div>
        <p>{{ formattedDate }}</p>
        <p> {{ dayOfWeek }}</p>
    </div>
</template>

<script>
export default {
    name: 'TodayDate',
    data() {
        return {
            formattedDate: '',
            dayOfWeek: null,
        };
    },
    methods: {
        getTodayDate() {
            const date = new Date();
            // kun oy yil olish
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // 
            const year = date.getFullYear();

            //Sana formati 
            this.formattedDate = `${day}/${month}/${year}`;
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            this.dayOfWeek = daysOfWeek[date.getDay()];  // hafta kuni sonda 
        }
    },
    // 
    mounted() {
        this.getTodayDate();  // ustanovka 
    }
}
</script>

<style scoped>
p {
    font-weight: 600;
    color: #2c3e50
}
</style>