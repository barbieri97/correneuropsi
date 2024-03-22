<template>
    <div class="container">
        <main>
            <h1>Calculadora z-score e percentil</h1>
            <form>
                <input type="number" v-model="rawScore" placeholder="pontos brutos">
                <input type="number" v-model="mean" placeholder="média">
                <input type="number" v-model="standardDeviation" placeholder="desvio padrão">
                <div>
                    <input type="checkbox" v-model="method" name="" id="method">
                    <label for="method">z-score invertido?</label>
                </div>
            </form>
            <button @click="calculate">Calcular</button>
            <div class="result">
                <h3>Z-score: {{ zscore }}</h3>
                <h3>Percentil: {{ percentil }}</h3>
            </div>
        </main>
    </div>
</template>

<script>
import { ref } from 'vue';
import calculateZscore from '@/tools/zscore'
export default {
    setup () {
        let rawScore, mean, standardDeviation, method, zscore, percentil
        rawScore = ref(NaN)
        mean = ref(NaN)
        standardDeviation = ref(NaN)
        method = ref(false)
        zscore = ref(0)
        percentil = ref(0)

        const calculate = () => {
           const {z, p} = calculateZscore(rawScore.value, mean.value, standardDeviation.value, method.value)
           zscore.value = z
           percentil.value = p
        }

        return {
            calculate,
            zscore,
            percentil,
            rawScore,
            mean,
            standardDeviation,
            method
        }


    }

}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 200px;
}

main {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: start;
}
input {
    margin-top: 10px;
}
</style>