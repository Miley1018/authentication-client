import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component{
    renderLinks(){
        console.log('sss'+this.props.authenticated);
        if (this.props.authenticated){
           return (
                <li>
                    <Link to='/signout'>
                        Sign out
                    </Link>
           </li> )  
        }else{
            return (
                [
                <li key={1}><Link to='/signin'> Sign in</Link></li>,
                <li key={2}><Link to='/signup'>Sign up</Link></li>   
                ])
        }//返回array
    }
    render(){
        return(
            <nav>
                <Link to='/'> Redux Auth </Link>
                <ul>
                   {this.renderLinks()}
                </ul>
            </nav>
        )
    };
}

function mapStateToProps(state){
    return{
        authenticated:state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);