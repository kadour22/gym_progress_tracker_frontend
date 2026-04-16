import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gym-progress-tracker-hhja.onrender.com/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export const UserAPI = {
    login: (credentials) => axiosInstance.post("users/get-token/", credentials),
    refreshToken: (refreshToken) => axiosInstance.post("users/refresh-token/", { refresh: refreshToken }),
    user_data: () => axiosInstance.get("users/user-data/"),
}

export const ProgramAPI = {
    list_programs: () => axiosInstance.get("programs/program-data/"),
    generate_ai_program: (data) => axiosInstance.post("programs/ai-generate-program/", data),
    get_program: (program_id) => axiosInstance.get(`programs/program-data/program/${program_id}/`),
    prgram_data: () => axiosInstance.get("programs/program-data/"),

}
export default axiosInstance;