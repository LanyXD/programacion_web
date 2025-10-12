import axios from "axios";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createLink = async (data) => {
  try {
    const response = await api.post("/links/", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear el link:", error.response?.data || error.message);
    throw error;
  }
};

export const getLink = async (id) => {
  try {
    const response = await api.get(`/links/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el link:", error.response?.data || error.message);
    throw error;
  }
};
