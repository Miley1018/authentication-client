import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm,Field } from 'redux-form'; 
import * as actions from '../../actions/index';

const renderInput = field =>   // Define stateless component to render input and errors
<div>
  <input {...field.input} type={field.type}/> 
  {field.meta.touched &&
   field.meta.error &&
   <span>{field.meta.error}</span>}
</div>
class Signin extends Component{
    handleFormSubmit({email,password}){
        console.log(email,password);
        this.props.signinUser({email,password});
    }
    renderAlert(){
        if (this.props.errorMessage){
            return (<div>
                <strong>Opps! </strong>{this.props.errorMessage}
            </div>)
        }
    }
    render(){
        const {handleSubmit}=this.props;
        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset>
                    <label>Email:</label>
                    <Field
                        name="email"  
                        component={renderInput}             
                        type="text"/>  
                </fieldset>
                <fieldset>
                    <label >Password:</label>
                    <Field
                        name="password"  
                        component={renderInput}             
                        type="password"/>  
                </fieldset>
                {this.renderAlert()}
                <button type='submit'>Sign in</button>
            </form>
        )
    }
}
function mapStateToProps(state){
    return{
        errorMessage:state.auth.error
    }
}
export default 
connect(mapStateToProps,actions)(reduxForm({//Creates a decorator with which you use redux-form to connect your form component to Redux. 
    form:'signin'
})(Signin));//null 就是property， action 就是action);

