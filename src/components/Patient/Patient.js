import React from 'react'

function Patient({patient}) {
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

export default Patient