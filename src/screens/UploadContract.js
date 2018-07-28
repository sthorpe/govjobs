import React, {Component} from 'react'
import { Grid, form, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class UploadContract extends React.Component {

	constructor(props, context) {
	    super(props, context);
    
	    this.handleChangeName =this.handleChangeName.bind(this);
	    this.handleChangePass = this.handleChangeDetails.bind(this);
	    this.goBack = this.goBack.bind(this);

	    this.state = {
	      companyName: '',
	      companyDetails: '',
	      goBack: false,
	      goExplore: false
	      
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
  			return (<Redirect push to="/explore" />);
  		}

  		return (
  			<div>
			    <Grid>
				   	<form>
						<FormGroup>
							<ControlLabel>Company Name:</ControlLabel>
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