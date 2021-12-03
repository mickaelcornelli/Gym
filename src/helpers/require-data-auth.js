import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import {config} from '../config';
import {Redirect} from 'react-router-dom';
import {connectUser} from '../actions/user/userAction';

export default function(ChildComponent, withAuth = false) {
    class RequireDataAuth extends Component {

		constructor(props) {
			super(props);
			this.state = {
				redirect: false
			} 
		}
		
		componentDidMount(){
		    
    	   if(this.props.user.isLogged === false) { 
    	        const token = window.localStorage.getItem('gym-token');
    	        if(token === null && withAuth) {
            		this.setState({redirect: true})
    	        
    	        } else {
    	            axios.get(config.api_url+"/api/v1/user/checkToken", { headers: { "x-access-token": token }})
            		.then((response)=>{
    	                
    	                if(response.data.status !== 200) {
    	                
    	                    if(withAuth === true) {
            					this.setState({redirect: true})
            				}
    	         
    	                }else{
    	     
    	                  let user = response.data.user[0];
    	             
    	                  user.token = token;
    	         
    	                  this.props.connectUser(user);
    	                }   
            		})
    	        }         
    	   }      
		}
		
		render(){
		    if(this.state.redirect) {
				return <Redirect to="/login"/>
			}
			return (<ChildComponent {...this.props}/>)
		}
	                    
    }

    const mapStateToProps = (store) => {
    	return {
	  		user: store.user
    	}
    }
    
    const mapDispatchToProps = {
		connectUser
    }
    
    return connect(mapStateToProps, mapDispatchToProps)(RequireDataAuth);
}