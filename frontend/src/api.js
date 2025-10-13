import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://127.0.0.1:8000"
    : "http://backend:8000"; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createLink = async (data) => {
  try {
    const response = await api.post("/links/create/", data);
    console.log("Link creado:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error en backend:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("No se recibió respuesta del backend:", error.request);
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }
    throw error;
  }
};

export const revealLink = async (id) => {
  try {
    const response = await api.get(`/links/reveal/${id}/`);
    console.log("Mensaje revelado:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error en backend:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("No se recibió respuesta del backend:", error.request);
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }
    throw error;
  }
};
