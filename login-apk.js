const API_URL = "https://august-tract-423309-d7-default-rtdb.firebaseio.com/MyFirstProject";

const apiRequest = async (endpoint, method = "POST", body = null) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(`${API_URL}/${endpoint}`, config);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const registerUser = (userData) => apiRequest("users.json", "POST", userData);
