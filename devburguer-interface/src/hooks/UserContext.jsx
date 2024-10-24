import { createContext, useState, useEffect, useContext, Children } from "react";



const UserContext = createContext({});

export const UserProvider = ({ Children }) => {
    const [userInfo, setUserInfo] = useState({ });
    
    const putUserData = ( userInfo) => {
        setUserInfo(userInfo)

        localStorage.setItem('devburguer:userData', JSON.stringify(userINfo));
    }

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburguer:userData');
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburguer:userData')
        if(userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    }, [])

    return (
        <UserContext.Provider value= {{userInfo, putUserData}}>
            {children}
            </UserContext.Provider>
    );
};


export const useUser = () => {
    const context = useContext(UserContext)

    if(!context) {
        throw new Error('useUser must be a valid context')
    }

    return context;
}