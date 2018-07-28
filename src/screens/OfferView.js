import React, {Component} from 'react'
import HelloChild from '../components/HelloChild'
import {Grid, Row, Col, Button, Well} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class OfferView extends React.Component {

	constructor(props, context) {
	    super(props, context);    
	    
	    this.goBack =this.goBack.bind(this);

	    this.state = {
	    	goBackBool: false
	    }


  	}

  	goBack() {
  		this.setState({goBackBool: true});
  	}
  	

  	render(){

  		if(this.state.goBackBool){
  			return (<Redirect push to="/upload_contract" />);
  		}


  		return(
  			<div>
			    <Grid>

			    	<Row>
			    		<Well>Offer Title</Well>
			    	</Row>
			    	<Row>
			    		<Well>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida purus vitae libero sollicitudin bibendum non quis nisl. Integer sem risus, dignissim ac enim in, ultricies egestas leo. Donec purus mauris, imperdiet eget sagittis sed, feugiat sed ligula. Ut nec elementum justo. Maecenas porta libero enim, sed interdum urna pellentesque eget. Mauris fermentum et neque vel finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit facilisis maximus. Etiam quis est sit amet lacus tincidunt aliquet. Duis sed sapien ac metus luctus malesuada eget at erat. Vivamus tristique et odio sit amet tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis molestie finibus. Quisque interdum interdum sem, a faucibus ante semper vitae.</Well>
			    	</Row>

			    	<Row>
			    		<Well>Max Price: $xxx,xxx.xx</Well>
			    	</Row>
				   	<Row>
				   		<Button style={{margin: "10px"}} onClick={this.goBack}>Updload Contract</Button>
				    </Row>


				    
			    </Grid>
			    
			</div>
  		);
  	}
}
  

export default OfferView
