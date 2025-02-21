import {ref} from "vue";
import {defineStore} from "pinia";

export const useAppState = defineStore('appState', () => {
    const codes = ref([]);

    const clearRequired = ref(false);
    const resetRequired = ref(false);
    const exitPressed = ref(false);

    function setCodes(newCodes) {
        codes.value.push(...newCodes)
    }

    function clearCodes() {
        codes.value.splice(0)
    }


    return {codes, setCodes, clearCodes, clearRequired, resetRequired, exitPressed}
})