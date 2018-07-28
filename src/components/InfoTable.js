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
            </tr>
            <tr>
              <th>Request</th>
            </tr>
            <tr>
              <th>Offer Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>   
              <td>{props.entry1}</td>
            </tr>
            <tr>
              <td>{props.entry2}</td>
            </tr>
            <tr>
              <td>{props.entry3}</td>
            </tr>
          </tbody>
        </Table>
      </Panel.Body>
    </Panel>
    
  </div>
)

export default InfoTable