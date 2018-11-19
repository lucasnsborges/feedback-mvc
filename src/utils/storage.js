import debounce from "./debounce";

const KEY = "app-todos";

export default {
    get: () => JSON.parse(localStorage.getItem(KEY) || "[]"),
    set: debounce(t => localStorage.setItem(KEY, JSON.stringify(t)), 1000),
}