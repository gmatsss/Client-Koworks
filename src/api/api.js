const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export async function fetchData(
  endpoint,
  method = "GET",
  data = null,
  useFormData = false
) {
  const url = `${API_ENDPOINT}${endpoint}`;

  const options = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": useFormData ? undefined : "application/json",
    },
    credentials: "include",
  };

  if (data) {
    if (useFormData) {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      options.body = formData;
    } else {
      options.body = JSON.stringify(data);
    }
  }

  try {
    const response = await fetch(url, options);

    const responseData = await response.json();

    switch (response.status) {
      case 200: // OK
      case 201: // Created
      case 400: // Bad Request
      case 401: // Unauthorized
      case 403: // Forbidden
      case 404: // Not Found
      case 409: // Conflict
      case 500: // Internal Server Error
        return responseData;
      default:
        throw new Error(responseData.error || "An unexpected error occurred");
    }
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error so it can be handled by the calling code
  }
}
