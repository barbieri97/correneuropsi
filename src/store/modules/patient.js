import { defineStore } from "pinia";

// Função para carregar os dados do localStorage
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("patient");
  return data ? JSON.parse(data) : {};
};

// Função para salvar os dados no localStorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("patient", JSON.stringify(state));
};

export const usePatientStore = defineStore("patient", {
  state: () => ({
    name: "",
    birthDate: "",
    age: { years: 0, months: 0 },
    education: "",
    gender: "",
  }),
  actions: {
    initialize() {
      const savedData = loadFromLocalStorage();
      Object.assign(this, savedData);
    },
    // Salvar os dados no localStorage sempre que houver alterações no estado
    save(newState) {
      this.$patch(newState);
    },
    afterCreate() {
      this.$subscribe(() => {
        saveToLocalStorage(this.$state);
      });
    },
  },
});
