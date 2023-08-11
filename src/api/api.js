export async function fetchData(
  url,
  method = "GET",
  data = null,
  useFormData = false
) {
  const options = {
    method: method,
    headers: {
      Accept: "application/json", // Added this line
      "Content-Type": useFormData ? undefined : "application/json",
    },
    credentials: "include", // Include credentials like cookies with the request
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
        return responseData;
      case 201: // Created
        return responseData;
      case 400: // Bad Request
        throw new Error(responseData.error || "Bad Request");
      case 401: // Unauthorized
        return responseData;
      case 403: // Forbidden
        throw new Error(responseData.error || "Forbidden");
      case 404: // Not Found
        throw new Error(responseData.error || "Not Found");
      case 500: // Internal Server Error
        throw new Error(responseData.error || "Internal Server Error");
      default:
        throw new Error(responseData.error || "An unexpected error occurred");
    }
  } catch (error) {
    console.log(error);
    // Re-throw the error so it can be handled by the calling code
  }
}
