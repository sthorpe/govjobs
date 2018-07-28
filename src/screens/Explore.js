import React, {Component} from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import InfoColumn from '../components/InfoColumn'
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
				    		<InfoColumn style={style} tableHeader={"Name"} entry1={"dummy"} entry2={"dummy"} entry3={"dummy"}/>
				    	</Col>
				   
				   		<Col sm={4} md={4}>
				    		<InfoColumn style={style} tableHeader={"Wealth"} entry1={"dummy"} entry2={"dummy"} entry3={"dummy"}/>
				    	</Col>
				    
				    	<Col sm={4} md={4} style={style}>
				    		<InfoColumn style={style} tableHeader={"Hash"} entry1={"dummy"} entry2={"dummy"} entry3={"dummy"}/>
				    	</Col>
				    </Row>
				    
			    </Grid>
			    
			</div>
  		);
  	}
}
  

export default Explore