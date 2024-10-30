<template>
    <div>
        <h1>Сума чисел:</h1>
        <p v-if="sum !== null">Сума: {{ sum }}</p>
        <p v-else>Введіть дійсні числа через кому.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sum: null,
        }
    },
    created() {
        const numbers = this.$route.params.numbers.split(',').map((num) => parseFloat(num.trim()))
        if (numbers.every((num) => !isNaN(num))) {
            this.sum = numbers.reduce((acc, num) => acc + num, 0)
        } else {
            this.sum = null
        }
    },
}
</script>
