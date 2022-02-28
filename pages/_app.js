import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore  from "../store/configureStore"
import withRedux from "next-redux-wrapper";

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be access by the client
        return {pageProps: pageProps};
    }

    render() {
        //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
        const {Component, pageProps} = this.props;

        return (
            <Provider store={configureStore()}>
                <Component {...pageProps}/>
            </Provider>
        );
    }

}

//makeStore function that returns a new store for every request
const makeStore = () => configureStore();

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
