import React from 'react'

function PatientItem({patient}) {
  return (
        <tr>
                <td>
                        {patient.firstname}
                </td>
                <td>
                        {patient.surname}
                </td>
                <td>
                        {patient.email}
                </td>
                <td>
                        {patient.phone}
                </td>
        </tr>
  )
}

export default PatientItem