import type { AppProps } from 'next/app';
import React from 'react';
import wrapper from '../redux/index';
import '../scss/style.scss';
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}

export default MyApp;
