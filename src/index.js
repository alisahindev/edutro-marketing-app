import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import { Helmet } from 'react-helmet'
import "moment/locale/tr";
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { toast } from "react-toastify";
import initializeStores from './stores/storeInitializer';

import 'react-toastify/dist/ReactToastify.css';

const stores = initializeStores();
toast.configure();

const app = (
    <Provider {...stores}>
        <BrowserRouter>
            <Helmet titleTemplate="%s | Edutro" title="Kişisel Gelişim Eğitimleri" />
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();