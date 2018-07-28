import React from 'react'
import {Panel, Table} from 'react-bootstrap'

const InfoTable = (props) => (
  <div>

    <Panel>
      <Panel.Body>
        <Table>
          <thead>
            
            <tr>
              <th>Agency</th>
          
        
              <th>Request</th>
        
            
              <th>Offer Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>   
              <td>dummy</td>
              <td>dummy</td>
              <td>dummy</td>
            </tr>
            <tr>
              <td>dummy</td>
              <td>dummy</td>
              <td>dummy</td>
            </tr>
            <tr>
              <td>dummy</td>
              <td>dummy</td>
              <td>dummy</td>
            </tr>
          </tbody>
        </Table>
      </Panel.Body>
    </Panel>
    
  </div>
)

export default InfoTable