import React from 'react';

import {BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';

class NavTop extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="#" aria-expanded="false">
                            <i className="fa fa-user fa-fw"></i> 
                            {/*
                            {
                                this.state.username
                                ? <span>欢迎，{this.state.username}</span>
                                : <span>欢迎您</span>
                            }
                            */}
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                {/*<a onClick={()=>this.onLogout()}>*/}
                                <a>
                                    <i className="fa fa-sign-out-alt fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
		);
	}
}

export default NavTop;