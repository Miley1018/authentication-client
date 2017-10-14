const ROOT_URL='http://localhost:7777';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER,AUTH_ERROR} from './types';

export function authError(errorMessage){
    return{
        type:AUTH_ERROR,
        payload:errorMessage
    }
}

export function AuthUser(){
    return {
        type:AUTH_USER,
    }
}
