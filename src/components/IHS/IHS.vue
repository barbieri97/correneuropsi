<!-- TesteA.vue -->
<template>
    <main class="container">
      <h2>Correção do IHS</h2>
      <div id="questions-ihs">
        <form>
          <div v-for="value in infos" :key="value.id" class="question-area">
            <label :for="value.idTag">{{ value.item }}. </label>
            <input @input="checkInput" class="question-ihs" type="text" v-model:="value.response" :id="value.idTag">
          </div>
        </form>
        <button @click="done">Finalizar correção</button>
      </div>
      <div id="results-ihs">
        <table>
          <thead>
            <td>Area</td>
            <td>Total</td>
            <td>percentil</td>
          </thead>
          <tbody>
            <tr v-for="(value, key) in areas" :key="key">
              <td>{{ value.name }}</td>
              <td>{{ value.counter }}</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
        <button @click="redo">Refazer correção</button>
      </div>
      
      <!-- Conteúdo específico do teste A -->
    </main>
  </template>
  
  <script>
  import { reactive } from 'vue';
  export default {
    setup() {
      const areas = reactive({
        f1: {
          name: 'F1 - Conversação Assertiva',
          components: [8, 17, 18, 13, 24, 33, 36, 19, 26, 23, 22, 9, 2],
          counter: 0
        },
        f2: {
          name: 'F2 - Abrodagem Afetivo-Sexual',
          components: [12, 7, 20,],
          counter: 0
        },
        f3: {
          name: 'F3 - Expressão de sentimento positivo',
          components: [28, 10, 35, 3, 6, 25, 31, 29],
          counter: 0
        },
        f4: {
          name: 'F4 - Autocontrole / Enfrentamento',
          components: [30, 15, 16, 27, 11],
          counter: 0
        },
        f5: {
          name: 'F5 - Desenvoltura Social',
          components: [29, 31, 9, 1, 11, 19],
          counter: 0
        },
        total: {
          name: 'Total',
          counter: 0
        }
    })

      const dataConvertDirect = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4
      }

      const dataConvertInvert = {
        a: 4,
        b: 3,
        c: 2,
        d: 1,
        e: 0
      }

      const infos = reactive([
        {
          id: 1,
          item: '1',
          classes: ['total'],
          idTag: 'question1',
          components: ['f5'],
          response: '',
          invert: false
        },
        {
          id: 2,
          item: '2',
          classes: ['total'],
          idTag: 'question2',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 3,
          item: '3',
          classes: ['total'],
          idTag: 'question3',
          components: ['f3'],
          response: '',
          invert: false
        },
        {
          id: 4,
          item: '4',
          classes: ['total'],
          idTag: 'question4',
          components: [],
          response: '',
          invert: false
        },
        {
          id: 5,
          item: '5',
          classes: ['total'],
          idTag: 'question5',
          components: [],
          response: '',
          invert: false
        },
        {
          id: 6,
          item: '6',
          classes: ['total'],
          idTag: 'question6',
          components: ['f3'],
          response: '',
          invert: false
        },
        {
          id: 7,
          item: '7',
          classes: ['total'],
          idTag: 'question7',
          components: ['f2'],
          response: '',
          invert: false
        },
        {
          id: 8,
          item: '8',
          classes: ['total'],
          idTag: 'question8',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 9,
          item: '9',
          classes: ['total'],
          idTag: 'question9',
          components: ['f1', 'f5'],
          response: '',
          invert: true
        },
        {
          id: 10,
          item: '10',
          classes: ['total'],
          idTag: 'question10',
          components: ['f3'],
          response: '',
          invert: false
        },
        {
          id: 11,
          item: '11',
          classes: ['total'],
          idTag: 'question11',
          components: ['f4', 'f5'],
          response: '',
          invert: false
        },
        {
          id: 12,
          item: '12',
          classes: ['total'],
          idTag: 'question12',
          components: ['f2'],
          response: '',
          invert: false
        },
        {
          id: 13,
          item: '13',
          classes: ['total'],
          idTag: 'question13',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 14,
          item: '14',
          classes: ['total'],
          idTag: 'question14',
          components: [],
          response: '',
          invert: false
        },
        {
          id: 15,
          item: '15',
          classes: ['total'],
          idTag: 'question15',
          components: ['f4'],
          response: '',
          invert: false
        },
        {
          id: 16,
          item: '16',
          classes: ['total'],
          idTag: 'question16',
          components: ['f4'],
          response: '',
          invert: false
        },
        {
          id: 17,
          item: '17',
          classes: ['total'],
          idTag: 'question17',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 18,
          item: '18',
          classes: ['total'],
          idTag: 'question18',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 19,
          item: '19',
          classes: ['total'],
          idTag: 'question19',
          components: ['f1', 'f5'],
          response: '',
          invert: true
        },
        {
          id: 20,
          item: '20',
          classes: ['total'],
          idTag: 'question20',
          components: ['f2'],
          response: '',
          invert: false
        },
        {
          id: 21,
          item: '21',
          classes: ['total'],
          idTag: 'question21',
          components: [],
          response: '',
          invert: false
        },
        {
          id: 22,
          item: '22',
          classes: ['total'],
          idTag: 'question22',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 23,
          item: '23',
          classes: ['total'],
          idTag: 'question23',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 24,
          item: '24',
          classes: ['total'],
          idTag: 'question24',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 25,
          item: '25',
          classes: ['total'],
          idTag: 'question25',
          components: ['f3'],
          response: '',
          invert: false
        },
        {
          id: 26,
          item: '26',
          classes: ['total'],
          idTag: 'question26',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 27,
          item: '27',
          classes: ['total'],
          idTag: 'question27',
          components: ['f4'],
          response: '',
          invert: false
        },
        {
          id: 28,
          item: '28',
          classes: ['total'],
          idTag: 'question28',
          components: ['f3'],
          response: '',
          invert: false
        },
        {
          id: 29,
          item: '29',
          classes: ['total'],
          idTag: 'question29',
          components: ['f3', 'f5'],
          response: '',
          invert: false
        },
        {
          id: 30,
          item: '30',
          classes: ['total'],
          idTag: 'question30',
          components: ['f4'],
          response: '',
          invert: false
        },
        {
          id: 31,
          item: '31',
          classes: ['total'],
          idTag: 'question31',
          components: ['f3', 'f5'],
          response: '',
          invert: false
        },
        {
          id: 32,
          item: '32',
          classes: ['total'],
          idTag: 'question32',
          components: [],
          response: '',
          invert: false
        },
        {
          id: 33,
          item: '33',
          classes: ['total'],
          idTag: 'question33',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 34,
          item: '34',
          classes: ['total'],
          idTag: 'question34',
          components: [],
          response: '',
          invert: true
        },
        {
          id: 35,
          item: '35',
          classes: ['total'],
          idTag: 'question35',
          components: ['f3'],
          response: '',
          invert: false
        },
        {
          id: 36,
          item: '36',
          classes: ['total'],
          idTag: 'question36',
          components: ['f1'],
          response: '',
          invert: true
        },
        {
          id: 37,
          item: '37',
          classes: ['total'],
          idTag: 'question37',
          components: [],
          response: '',
          invert: true
        },
        {
          id: 38,
          item: '38',
          classes: ['total'],
          idTag: 'question38',
          components: [],
          response: '',
          invert: false
        },
       
      ])





      const convert = (result, data) => {
        if (!result) {
          return 0
        }
        return data[result]
      }

      const checkInput = (event) => {
        const values = ['a', 'b', 'c', 'd', 'e', '']
        const value = event.target.value
        if (!values.includes(value.toLowerCase() )) {
          window.alert('Isira um valor valido: a, b, c, d, e')
          event.target.value = ''
          return
        }
      }

      const done = () => {
        let stop = false
        infos.forEach(e => {
          if(stop) {
            return
          }
          if (!e.response) {
           let confirm = window.confirm(`Se atente que o item ${e.item} está sem resposta e pode interferir no resultado final.`)
           if (!confirm) {
            stop = true
            return
           }
          }
          const result = e.response.toLowerCase()
          const data = e.invert ? dataConvertInvert : dataConvertDirect
          const value = convert(result, data)
          e.components.forEach(i => {
            areas[i].counter += value
            areas.total.counter += value
          })
          document.querySelector('#questions-ihs').style.display = 'none'
          document.querySelector('#results-ihs').style.display = 'block'
        })
        
      }
      
      const redo = () => {
        Object.keys(areas).forEach(e => {
          areas[e].counter = 0
        })
          document.querySelector('#questions-ihs').style.display = 'block'
          document.querySelector('#results-ihs').style.display = 'none'

        }


      return {
        convert,
        infos,
        dataConvertDirect,
        dataConvertInvert,
        areas,
        checkInput,
        done,
        redo
      }
    }
  }
  </script>
  
  <style scoped>
  #results-ihs {
    display: none;
  }

  #questions-ihs form {
    display: flex;
    flex-flow: wrap;
  }
  .question-ihs {
    width: 20px;
    color: var(--vd4);
  }
  .question-area {
    margin: 5px;
    background-color: var(--vd1);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px var(--pr);
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

  .container {
    margin-inline: 50px;
  }
  </style>
  