import React from 'react';
import {render} from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux';
import App from './components/App';
import configureStore from './redux/configureStore';
 const store = configureStore();
render(
     <ReduxProvider store ={store}>
         <App />
     </ReduxProvider>,
         
         document.getElementById('root')
      );
