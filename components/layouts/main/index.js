import React, { Component }from 'react';
import Head from 'next/head';
import Header from "../../includes/Header";
import Footer from "../../includes/Footer";

class MainLayout extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Head>
                    <title>AppTitle</title>
                    <link href="https://fonts.googleapis.com/css?family=Play:400,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"/>
                </Head>
                <div className='mainLayout_container'>
                    <Header />
                        <div className='main_container'>
                            {this.props.children}
                        </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default MainLayout;
