import React from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';

const Card = () => (
  <div>
   <Grid>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        test 1
      </Col>
      <Col xs={6} md={4}>
        test 2
      </Col>
      <Col xsHidden md={4}>
        test 3
      </Col>
    </Row>
   </Grid>
    <Well>Look Im in a well!</Well>;
  </div>
)

export default Card
