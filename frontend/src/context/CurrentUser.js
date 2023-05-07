import { createContext, useState, useEffect } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {

        const getLoggedInUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
              setCurrentUser(null);
              return;
            }
            const response = await fetch('http://localhost:5000/authentication/profile', {
              headers: {
                'Authorization': `Bearer ${token}`
              },
              credentials: 'include'
            });
            if (response.status === 401) {
              setCurrentUser(null);
            } else {
              const user = await response.json();
              setCurrentUser(user);
            }
          }
        getLoggedInUser();
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider
