import React, {Component} from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import InfoTable from '../components/InfoTable'
import {Redirect} from 'react-router-dom'


//This is a good layout for three collumns


const style ={
	margin: "10",
}

class CompanyMenu extends React.Component {

	constructor(props, context) {
	    super(props, context);    
	    
	    this.goToUpload = this.goToUpload.bind(this);

	    this.state = {
	     
	      goUpload: false
	      
	    };
  	}


  	goToUpload() {
  		this.setState({goUpload: true});
  	}

  	render(){

  		if(this.state.goUpload){
  			return (<Redirect push to="/upload_contract" />);
  		}

  		return(
  			<div>
			    <Grid>
				   	<Row>

				   		<InfoTable/>
				   		
				    </Row>
				    
			    </Grid>
			    
			</div>
  		);
  	}
}
  

export default CompanyMenu