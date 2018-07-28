import React, {Component} from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import InfoTable from '../components/InfoTable'
import {Redirect} from 'react-router-dom'


//This is a good layout for three collumns


const style ={
	margin: "10",
}

class AgencyMenu extends React.Component {

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
  			return (<Redirect push to="/upload_offer" />);
  		}

  		return(
  			<div>
			    <Grid>
				   	<Row>

				   		<InfoTable/>
				   		
				    </Row>
				    <Row>
				    	<Col xs={6} xsOffset={5}>
				    		<Button style={{margin: "10px"}} onClick={this.goToUpload}>Upload Offer</Button>
				    	</Col>
				    </Row>
			    </Grid>
			    
			</div>
  		);
  	}
}
  

export default AgencyMenu