import React from 'react';
import { Provider } from 'mobx-react';
import Store from './Store';

const StoreProvider = ({ children }) => {
  return <Provider store={new Store()}>{children}</Provider>;
};

export default StoreProvider;
