import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function NoDataTableCell(props) {
    const { className } = props
    return (
        <TableRow>
            <TableCell align="left" className={className}>
                no data
        </TableCell>
        </TableRow>
    )
}
