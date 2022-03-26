import React from 'react'
import PatientItem from './PatientItem'

const PatientList = ({patients}) => {
  return (
        <table>
                <tr>
                        <th>
                                First Name
                        </th>
                        <th>
                                Last Name
                        </th>
                        <th>
                                Email
                        </th>
                        <th>
                                Phone
                        </th>
                </tr>
                {
                        patients.map(p =>(
                            <PatientItem   patient={p} />
                        ))
                }
        </table>
  )
}

export default PatientList

