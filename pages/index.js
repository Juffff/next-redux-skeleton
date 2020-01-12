import React, { Component } from 'react';
import { connect } from 'react-redux';
import {testAction} from "../store/actions";

class Home extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
       this.props.testAction();
    }

    render() {
        return (
            <>
                Just Home Page
            </>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps =  {testAction};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
