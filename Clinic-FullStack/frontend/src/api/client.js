import axios from "axios";
const API_BASE_URL = typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE_URL || "http://localhost:3000/api/v1";
const ACCESS_TOKEN_KEY = "tendo_access_token";
function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}
function setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}
function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});
apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(
          `${API_BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        setAccessToken(data.data.accessToken);
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;
        }
        return apiClient(originalRequest);
      } catch {
        clearAccessToken();
        window.location.href = "/login";
      }
    }
    return Promise.reject(normalizeApiError(error));
  }
);
function normalizeApiError(error) {
  if (error.response?.data) {
    return {
      status: error.response.status,
      title: error.response.data.title ?? "Request failed",
      detail: error.response.data.detail ?? error.message,
      errors: error.response.data.errors
    };
  }
  return {
    status: 0,
    title: "Network error",
    detail: error.message || "Unable to connect to the server."
  };
}
function getErrorMessage(error) {
  if (error && typeof error === "object" && "detail" in error) {
    return error.detail ?? error.title;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred.";
}
export {
  API_BASE_URL,
  apiClient,
  clearAccessToken,
  getAccessToken,
  getErrorMessage,
  normalizeApiError,
  setAccessToken
};
