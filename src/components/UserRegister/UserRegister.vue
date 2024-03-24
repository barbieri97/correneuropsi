<template>
    <div class="container">
        <h1>Cadastro de Usuário</h1>
        <form @submit.prevent="saveUser">
            <p v-if="showUserSaveSuccess" class="user-save-success">Paciente cadastrado com sucesso</p>
                <div class="form-group">
                    <label for="patient-name">Nome</label>
                    <input type="text" v-model="user.name" id="patient-name">
                </div>
                <div class="form-group">
                    <label for="birth-date">Data de nascimento</label>
                    <input @input="calculateAge" v-model="user.birthDate" type="date" id="birth-date">
                </div>
                <div class="form-group">
                    <label for="education">Escolaridade</label>
                    <select v-model="user.education" id="education">
                        <option value="">Selecione um valor</option>
                        <option value="fundamental">Esino fundamental</option>
                        <option value="medio">Ensino médio</option>
                        <option value="superio">Ensino superior</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="gender">Gênero</label>
                    <select v-model="user.gender" id="genbder">
                        <option value="">Escolha um valor</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <button type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
import { usePatientStore } from '@/store/modules/patient';
import { reactive, ref } from 'vue';
export default {
    setup() {
        const patientStore = usePatientStore()
        patientStore.initialize()

        let showUserSaveSuccess = ref(false)
        let user = reactive({
            name: patientStore.name,
            birthDate: patientStore.birthDate,
            age: patientStore.age,
            education: patientStore.education,
            gender: patientStore.gender
        })

        const saveUser = () => {
            patientStore.save(user)
            showUserSaveSuccess.value = true
        }

        const calculateAge = () => {
            if (user.birthDate) {
        const today = new Date();
        const birthDate = new Date(user.birthDate);

        let yearsDiff = today.getFullYear() - birthDate.getFullYear();
        let monthsDiff = today.getMonth() - birthDate.getMonth();
        const daysDiff = today.getDate() - birthDate.getDate();

        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
          yearsDiff--;
          monthsDiff += 12;
        }

        user.age.years = yearsDiff;
        user.age.months = monthsDiff;
      }
        }

        return {
            calculateAge,
            user,
            saveUser,
            showUserSaveSuccess,
        }
    }

}
</script>

<style scoped>

.user-save-success {
    color: var(--vd4);
}

.form-group {
    display: flex;
    flex-direction: column;
    margin: 10px;
    font-size: large;
}

</style>