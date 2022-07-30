import React, { Component } from 'react';
import './Footer.css';
class FooterComponent extends Component {
    render() {    
      return (
         <footer className="footer-area bg-f">	
		<div className="copyright">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<p className="company-name">All Rights Reserved. &copy; 2022 <a href="#">news artical</a></p>
					</div>
				</div>
			</div>
		</div>		
	</footer>
      );
    }
  }
  
  export default FooterComponent;