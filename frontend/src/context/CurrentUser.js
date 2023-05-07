import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      const getLoggedInUser = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          setCurrentUser(null);
          return;
        }
  
        try {
          const response = await fetch('http://localhost:5000/authentication/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: 'include',
          });
  
          if (!response.ok) {
            setCurrentUser(null);
            throw new Error('Failed to get user information');
          }
  
          const user = await response.json();
          setCurrentUser(user);
        } catch (error) {
          console.error(error);
          setCurrentUser(null);
        }
      };
  
      getLoggedInUser();
    }, []);
  
    return <CurrentUser.Provider value={currentUser}>{children}</CurrentUser.Provider>;
  }

  export default CurrentUserProvider