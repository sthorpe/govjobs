import React , {Component} from 'react'
import { Button, 
	Modal, 
	Grid, 
	Col, 
	Popover, 
	Tooltip, 
	OverlayTrigger, 
	form, 
	FormGroup, 
	FormControl, 
	ControlLabel } from 'react-bootstrap'

import {Redirect} from 'react-router-dom'

import firebase , { auth }from 'firebase'
import { connect } from 'react-firebase'

firebase.initializeApp({
    databaseURL: "https://govjobs-2f714.firebaseio.com"
})


class Home extends React.Component{


	constructor(props, context) {
	    super(props, context);

	    this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	    this.handleChange =this.handleChange.bind(this);
	    this.handleChangePass = this.handleChangePass.bind(this);
	    this.signIn = this.signIn.bind(this);
	    this.goToExlore = this.goToExlore.bind(this);

	    this.email = '';



	    this.state = {
	      show: false,
	      emailText: '',
	      passwordText: '',
	      redirect: false,
	      goExplore: false
	      
	    };
  	}

  	handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    handleChange(event) {
    	this.setState({emailText: event.target.value});
  	}

  	handleChangePass(event) {
    	this.setState({passwordText: event.target.value});
  	}

    signIn() {
    	//Someday
    	//auth.createUserWithEmailAndPassword(this.state.emailText, this.state.passwordText);
    	
    	
    	this.setState({redirect: true});
    	
    }

    goToExlore() {this.setState({goExplore: true});}
   

    render(){
    	const popover = (
	      <Popover id="modal-popover" title="popover">
	        very popover. such engagement
	      </Popover>
    	);
    	const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    	if (this.state.redirect) {
    		return (<Redirect push to="/agency_menu" />);
  		}

  		if (this.state.goExplore) {
  			return (<Redirect push to="/explore" />);
  		}

    	return (
    		<div>

			  	<Grid>
			  		<Col xs={12} xsOffset={5}>
				  		<div style={{margin: "10px"}}>
					  		<Button bsStyle="primary" bsSize="large"  onClick={this.handleShow}>
					    		Govern
					  		</Button>
					  	</div>

					  	<div style={{margin: "10px"}}>
					  		<Button bsStyle="primary" bsSize="large" onClick={this.goToExlore}>
					    		Explore
					  		</Button>	
				  		</div>
			  		</Col>
			  	</Grid>  



				<Modal show={this.state.show} onHide={this.handleClose}>
			      <Modal.Header closeButton>
			        <Modal.Title>Login</Modal.Title>
			      </Modal.Header>
			      <Modal.Body>
			        <form>
				        <FormGroup
				          
				        >
				          <ControlLabel>Email:</ControlLabel>
				          <FormControl
            				type="text"
            				value={this.state.emailText}
            				placeholder="Enter text"
            				onChange={this.handleChange}
          				  />
				          
				         <ControlLabel>Password:</ControlLabel>
				          <FormControl
            				type="password"
            				value={this.state.passwordText}
            				placeholder="Enter text"
            				onChange={this.handleChangePass}
          				  />
				          
				          
				        </FormGroup>

				        <Button style={{margin: "10px"}} onClick={this.signIn}>Submit</Button>

				    </form>

			        
			        
			        
			      </Modal.Body>
			      <Modal.Footer>
			        <Button onClick={this.handleClose}>Close</Button>
			      </Modal.Footer>
			    </Modal>


			</div>

    	);
    }
}

export default Home
