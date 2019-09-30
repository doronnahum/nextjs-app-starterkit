import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function TableTitle(props) {
    const { className,tableTitle } = props
    return (
        <TableRow>
            <TableCell className={className}
                colSpan={3}
                align="left">
                {tableTitle}
            </TableCell>
        </TableRow>
    )
}
