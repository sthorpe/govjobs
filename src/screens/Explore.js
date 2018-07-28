import React, {Component} from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import InfoColumn from '../components/InfoColumn'
import InfoLinksColumn from '../components/InfoLinksColumn'
import {Redirect} from 'react-router-dom'


//This is a good layout for three collumns


const style ={
	margin: "10",
}

class Explore extends React.Component {

	constructor(props, context) {
	    super(props, context);    
	    
	    
  	}
  	

  	render(){


  		return(
  			<div>
			    <Grid>
				   	<Row>
				   		<Col sm={4} md={4}>
				    		<InfoLinksColumn style={style} tableHeader={"Agencies"} offer1={"AEE"} offer2={"AAA"} offer3={"DTOP"}/>
				    	</Col>
				   
				   		<Col sm={4} md={4}>
				    		<InfoLinksColumn style={style} tableHeader={"Companies"} offer1={"Whitefish"} offer2={"RRContractos"} offer3={"UmbrellaMe"}/>
				    	</Col>
				    
				    	<Col sm={4} md={4} style={style}>
				    		<InfoLinksColumn style={style} tableHeader={"Offers"} offer1={"AEE 2822"} offer2={"AAA 9099"} offer3={"AEE 8878"}/>
				    	</Col>
				    </Row>
				    
			    </Grid>
			    
			</div>
  		);
  	}
}
  

export default Explore