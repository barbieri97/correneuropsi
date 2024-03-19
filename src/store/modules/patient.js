import { defineStore } from "pinia";

export const usePatientStore = defineStore("patient", {
  state: () => ({
    name: "",
    age: 0,
    education: "",
    gender: "",
  }),
});
