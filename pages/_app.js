import React from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import MainLayout from '../components/layouts/main';

const App = props => {
    const {Component, pageProps, store} = props;
    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    )
};

export default withRedux(initStore)(App);
