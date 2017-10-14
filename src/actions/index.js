const ROOT_URL='http://localhost:7777';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER,AUTH_ERROR} from './types';

export function signinUser({email,password}){
    return function(dispatch){//REDUX-THUNK
        axios.post(`${ROOT_URL}/signin`,{email,password})
        .then(response=>{
            dispatch({type:AUTH_USER});
            localStorage.setItem('toke',response.data.token);
           browserHistory.push('/feature'); 
        }).catch(()=>{
            dispatch(authError('Bad login info'));
        });
    }
}

export function authError(errorMessage){
    return{
        type:AUTH_ERROR,
        payload:errorMessage
    }
}