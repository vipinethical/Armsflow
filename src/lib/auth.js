import React, { createContext, useContext, useState } from 'react';
import {
    Route
} from "react-router-dom";
import AuthModal from '../components/Modal/AuthModal/AuthModal';




const authContext = createContext();


export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth()
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(authContext);
};


export function PrivateRoute({ component: Component, ...rest }) {
    let { user } = useAuth();
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
        <Route
            {...rest}
            render={({ props }) =>
                user.userType ? (
                    <Component {...props} />
                ) : (
                    <AuthModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                    // <Payments />
                )
            }
        />
    );
}



export const useProvideAuth = () => {
    const [user, setUser] = useState({
        userType: '',
        userId: NaN
    });

    return {
        user,
        setUser
    }
};
