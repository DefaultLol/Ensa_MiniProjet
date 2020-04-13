import React, { Component } from 'react'
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import {logout} from '../../actions/prof/authActions';
import {Redirect,Link} from 'react-router-dom';
import { Container } from '@material-ui/core';

class Home extends Component {
    onLogout=()=>{
        this.props.logout();
    }
    render() {
        return (
            <div>
                <Container maxWidth="xs">
                Home Prof<br />
                <Link className="btn btn-danger" to="/prof/login" onClick={this.onLogout}>Logout</Link>
                </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({

});

export default connect(mapStateToProps,{logout})(Home);
