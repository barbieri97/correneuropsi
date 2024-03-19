<!-- TesteA.vue -->
<template>
    <div>
      <div class="container correction">
        <h2>BDEFS - Versão Extensa</h2>
        <form>
          <button @click="done">concluir correção</button>
          <div v-for="item in areas" :key="item.id">
          <section v-if="item.questions">
            <div class="subtitle" @click="openQuestions"><h3>{{ item.name }}</h3></div>
            <div class="questions">
              <div class="question" v-for="(q, qIndex) in item.questions" :key="qIndex">
                <p>{{ q }} - </p>
                <label>
                  <input v-bind:data-id="q" type="number" class="total" :class="item.referenceClass">
                </label>
              </div>
            </div>
          </section>
          </div>
        </form> 
        </div>
        <div class="container results">
          <table>
            <thead>
              <tr>
                <th>Área</th>
                <th>Pontos Brutos</th>
                <th>Percentil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="area in areas" :key="area.id">
                <td> <input  disabled type="text" v-model="area.name" id="result-name"></td>
                <td> <input disabled type="number" v-model="area.counter" id="result-raw"></td>
                <td> ... </td>
              </tr>
            </tbody>
          </table>
          <button class="redo" @click="redo">Refazer correcao</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {  
        areas: {
          f1: {
            id: 1,
            name: 'F1 - Gerênciamento de Tempo',
            counter: 0,
            referenceClass: 'f1',
            questions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"]
          },
          f2: {
            id: 2,
            name: 'F2 - Organização e Resolução de Problemas',
            counter: 0,
            referenceClass: 'f2',
            questions: ["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
          },
          f3: {
            id: 3,
            name: 'F3 - Autocontrole',
            counter: 0,
            referenceClass: 'f3',
            questions: ["46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64"]
          },
          f4: {
            id: 4,
            name: 'F4 - Motivação',
            counter: 0,
            referenceClass: 'f4',
            questions: ["65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76"]
          },
          f5: {
            id: 5,
            name: 'F5 - Autorregulação',
            counter: 0,
            referenceClass: 'f5',
            questions: ["77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89"]
          },
          total: {
            id: 6,
            name: 'Escore Total',
            counter: 0,
            referenceClass: 'total'
          },
          feTdah: {
            id: 7,
            name: 'FE-TDAH - Sintomas de TDAH',
            counter: 0,
            referenceClass: 'fe-tdah'
          },
          fe: {
            id: 8,
            name: 'FE - Sintomas Disexecutivo',
            counter: 0,
            referenceClass: ''
          },
      }

      }
    },
    methods: {
      openQuestions(event) {
        const element = event.currentTarget.parentNode
        const questions = element.querySelector('.questions')
        if (questions.style.display === 'none') {

          questions.style.display = 'flex'
        } else {
          questions.style.display = 'none'
        }
        
      },
      done() {
        const questions = document.querySelectorAll('.total')
        for (let e of questions) {
          if (e.value === "") {
            const item = e.parentNode.parentNode.querySelector('p').textContent
            window.alert(`O item ${item} não foi preenchido, caso não tenha resposta coloque o numero 0`)
            return
          }
        }
        Object.keys(this.areas).forEach(chave => {
          if (chave === 'fe') {
            return
          }
          let obj = this.areas[chave]
          let elements = document.querySelectorAll(`.${obj.referenceClass}`)
          elements.forEach(e => {
            let value = parseInt(e.value || 0)
            if (value >= 3 && chave === 'total') {
              this.areas.fe.counter += 1
            }
            obj.counter += value
          })
        })
        const correction = document.querySelector('.correction')
        const results = document.querySelector('.results')
        correction.style.display = 'none'
        results.style.display = 'block'


        
      },
      redo() {
        const correction = document.querySelector('.correction')
        const results = document.querySelector('.results')
        correction.style.display = 'block'
        results.style.display = 'none'
        Object.keys(this.areas).forEach(chave => {
          const obj = this.areas[chave]
          obj.counter = 0
        })

      }
    },
    mounted() {
      const form = document.querySelector('form')
      form.addEventListener('click', e => {
        e.preventDefault()
      })

      const inputs = document.querySelectorAll('.total')
      inputs.forEach(element => {
        element.addEventListener('input', e => { 
          if (e.target.value > 4 || e.target.value < 0) {
            window.alert('você precisa colocar um numero entre 1 e 4')
            e.target.value = NaN
          }
        })
        
      });

      const elementsFeTdah = [1, 6, 14, 16, 24, 49, 50, 55, 60, 65, 69]
      elementsFeTdah.forEach(element => {
        const e = document.querySelector(`[data-id="${element}"]`)
        e.classList.add('fe-tdah')
        
      });
    }
  }
  </script>
  
  <style scoped>
  .container {
    margin-inline: 50px;
  }
  .subtitle {
    background-color: var(--vd2);
    padding: 1px;
    color: var(--br);
    padding-left: 10px;
    border-radius: 5px;
  }
  .question {
    display: flex;
    align-items: center;
    background-color: var(--vd1);
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px var(--pr);
  }

  input {
    width: 30px;
    margin: 5px;
  }
  /* button {
    position: fixed;
    bottom: 20px;
    right: 20px;
  } */

  .results {
    display: none;
  }

  .subtitle:hover, button{
    cursor: pointer;
  }

  #result-name {
    width: 300px;
    border: none;
  }

  #result-raw {
    width: 40px;
    border: none;
  }

  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--vd2);
    color: var(--br);
    padding: 10px;
    border-radius: 15px;
    border: none;
    box-shadow: 5px 5px 10px var(--pr);
    font-size: medium;
    font-weight: 700;
  }
  td, th {
    border: 1px solid var(--pr);
    padding: 5px;
  }
  .questions {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  </style>
  