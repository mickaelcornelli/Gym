import React , {useEffect } from 'react'
import {connect} from "react-redux";
import {logoutUser} from "../actions/user/userAction";
import {Redirect} from "react-router-dom";

const Logout = (props) => {
    
    useEffect(()=>{
        removeData();
        props.logoutUser();
    }, [])

    const removeData = () => {
        try {
            window.localStorage.removeItem('b4y-token');
        } catch (error) {
            console.log(error)
        }
    };
    
	
    return <Redirect to="/"/>
}

const mapStateToProps = (store) => {
    return {
        user: store.user
    }
}
const mapDispatchToProps = {
    logoutUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);