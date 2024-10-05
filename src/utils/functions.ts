export const getAccessToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }
  return null;
};

export const getUserDetails = (): any => {
  if (typeof window !== "undefined") {
    const userDetails = localStorage.getItem("user_details");
    return userDetails ? JSON.parse(userDetails) : null;
  }
  return null;
};
