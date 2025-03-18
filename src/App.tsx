import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Booking from './components/Booking';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Booking />
      </div>
    </Provider>
  );
};

export default App;
