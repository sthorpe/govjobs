import React from 'react'
import { Link } from 'react-router-dom'
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
              <td><Link to={'/home'}>{props.offer1}</Link></td>
            </tr>
            <tr>
              <td><Link to={'/home'}>{props.offer2}</Link></td>
            </tr>
            <tr>
              <td><Link to={'/home'}>{props.offer3}</Link></td>
            </tr>
          </tbody>
        </Table>
      </Panel.Body>
    </Panel>
    
  </div>
)

export default InfoColumn