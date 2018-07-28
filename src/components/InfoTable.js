import React from 'react'
import {Panel, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
              <td>AEE</td>
              <td>Fix power plz, for free?</td>
              <td><Link to="/offer_view">0x1d5e988bd7ead464fb60ab52479c63b5979ab140ba4d21bd09e4571b91fe6bd9</Link></td>
            </tr>
            <tr>
              <td>EPA</td>
              <td>Garbage Everywhere</td>
              <td><Link to="/offer_view">0xac714d82e10447368a8f9bfaf00d32756870d4a159f8be2390d18fbd2cf538a9</Link></td>
            </tr>
            <tr>
              <td>DTOP</td>
              <td>Fix My Roads</td>
              <td><Link to="/offer_view">0xe52e584f1ce6e512752a6cd8dea2a435d9482f99c4a557fd67f40df34c983c2b</Link></td>
            </tr>
          </tbody>
        </Table>
      </Panel.Body>
    </Panel>
    
  </div>
)

export default InfoTable