import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Input from '@material-ui/core/Input';

export default function WaterAnalysisTitle(props) {
    const { className, handleInputChange, value } = props
    return (
        <TableRow>
            <TableCell className={className}
                colSpan={3}
                align="left">
                {'Current Cycles of Concentration'}
            </TableCell>
            <TableCell className={className}
                colSpan={3}
                align="left">
                <Input
                    id={'e30'}
                    label="Number"
                    value={value||''}
                    onChange={handleInputChange}
                    type="number"
                // className={classes.textField}
                />
            </TableCell>
        </TableRow>
    )
}
