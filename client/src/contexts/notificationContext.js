import { createContext, useState } from 'react';
export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({message: '', type: ''});

    return (
        <SearchContext.Provider value={{ notification, setNotification }}>
            {children}
        </SearchContext.Provider>
    );
};