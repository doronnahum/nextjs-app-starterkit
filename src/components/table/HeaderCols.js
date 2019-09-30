import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function HeaderCols(props) {
    const { data } = props
    return (
        <TableRow>
            {data.map((title) => {
                return <TableCell key={title} align="left">
                    {title}
                </TableCell>
            })}
        </TableRow>
    )
}
