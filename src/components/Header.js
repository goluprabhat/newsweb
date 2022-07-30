import React, { Component } from 'react';
import {NavLink, Link } from 'react-router-dom';
import './Header.css';
class HeaderComponent extends Component {
	state = {
		isMenuActive: false,
		}
    render() {  
		const isOn = this.state.isMenuActive;
      return (
        <header className="top-navbar">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" exact="true" to="/">
					news <span className="black">site</span>
				</Link>
				<button className="navbar-toggler" type="button" onClick={() => this.setState({isMenuActive: !isOn})}>
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className={isOn ? "collapse navbar-collapse show" : "collapse navbar-collapse hide"} id="navbars-rs-food">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink></li>
						<li className="nav-item"><NavLink exact activeClassName="active" to="/Cart" className="nav-link">Cart</NavLink></li>
						<li className="nav-item"><NavLink exact activeClassName="active" to="/Payment" className="nav-link">Payment</NavLink></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
      );
    }
  }
  
  export default HeaderComponent;