import axios from "axios";

//TESTE PARA CONECÇÃO COM O SERVIDOR SPRING.
const api = axios.create({
    baseURL: "http://10.0.2.2:8080",
    timeout: 10000, 
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
