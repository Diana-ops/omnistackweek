/*
* Author: Diana Regina 
* Function: To build elements for 
*/

import React from "react";
import './style.css';

function Rodape() {
	return(
		<div className="rodape">
				<p className="rodapeText">Project develop in OmniStackWeek 10 
				   by &nbsp;<a className="linkDin" href="https://www.linkedin.com/in/diego-schell-fernandes?originalSubdomain=br"> Diego Fernandes </a> &nbsp; | Layout proposal by &nbsp;<a className="linkDin" href="https://www.linkedin.com/in/diana-regina-a96840173/">  Diana Regina</a>
				</p>

				<i class="fab fa-github"></i>
		</div>

	);

}

export default Rodape;