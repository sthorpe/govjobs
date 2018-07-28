import React from 'react'
import {Panel, Table} from 'react-bootstrap'

const InfoColumn = (props) => (
  <div>

    <Panel>
      <Panel.Body>
        <Table>
          <thead>
            <tr>
              <th>{props.tableHeader}</th>
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

export default InfoColumn