import React, {Component} from 'react'
import { Grid, form, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class UploadContract extends React.Component {

	constructor(props, context) {
	    super(props, context);
    
	    this.handleChangeName =this.handleChangeName.bind(this);
	    this.handleChangeDetails = this.handleChangeDetails.bind(this);
	    this.handleChangePrice = this.handleChangePrice.bind(this);
	    this.goBack = this.goBack.bind(this);

	    this.state = {
	      companyName: '',
	      companyDetails: '',
	      companyPrice: '',
	      goBack: false,
	      goExplore: false, 

	      
	    };
  	}


  	goBack() {
  		this.setState({goBack: true});
  	}

  	handleChangeName(event) {
    	this.setState({companyName: event.target.value});
  	}

  	handleChangeDetails(event) {
    	this.setState({companyDetails: event.target.value});
  	}

  	handleChangePrice(event) {
    	this.setState({companyPrice: event.target.value});
  	}

   FieldGroup(id, label, help, ...props ) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


  	render(){


  		if(this.state.goBack){
  			return (<Redirect push to="/company_menu" />);
  		}

  		return (
  			<div>
			    <Grid>
				   	<form>
						<FormGroup>
							<ControlLabel>Contract Name:</ControlLabel>
								<FormControl
									type="text"
									value={this.state.companyName}
									placeholder="Enter text"
									onChange={this.handleChangeName}
								/>
							          
							<ControlLabel>Contract Details:</ControlLabel>
								<FormControl
			            			type="text"
			            			value={this.state.companyDetails}
			            			placeholder="Enter text"
			            			onChange={this.handleChangeDetails}
			            			componentClass="textarea"
			          			/>	  

			          		<ControlLabel>Price Offer:</ControlLabel>
								<FormControl
			            			type="text"
			            			value={this.state.companyPrice}
			            			placeholder="$xxx,xxx.xx"
			            			onChange={this.handleChangePrice}
			            			
			          			/>	  
			          		<ControlLabel>File:</ControlLabel>  
			          		<FormControl
			          			type="file"
			          		/>   
						</FormGroup>

						<Button style={{margin: "10px"}} onClick={this.goBack}>Submit</Button>
					</form>
			    </Grid>
			</div>
  		);
  	}


}
  

export default UploadContract