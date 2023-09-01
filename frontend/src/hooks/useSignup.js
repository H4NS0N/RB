import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (
    firstName,
    lastName,
    email,
    password,
    city,
    address,
    phone /*dateOfBirth*/
  ) => {
    setIsLoading(true);
    setError(null);

    const signup = async (
      firstName,
      lastName,
      email,
      password,
      city,
      address,
      phone
    ) => {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          city,
          address,
          phone,
        }),
      });
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        // gem bruger lokalt med JWT
        localStorage.setItem("user", JSON.stringify(json));

        // opdater AuthContext
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);
      }
    };

    return { signup, isLoading, error };
  };
};
