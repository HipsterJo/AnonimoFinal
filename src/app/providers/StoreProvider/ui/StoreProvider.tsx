import React from 'react';
import {Provider} from 'react-redux'
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: React.ReactNode
}

const StoreProvider: React.FC<StoreProviderProps> = ({children}) => {   
    const store = createReduxStore();
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;