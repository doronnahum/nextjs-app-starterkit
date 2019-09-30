import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { renderValueType } from './utils'
import PropTypes from 'prop-types';
// import { calculate } from 'src/components/data/tableUtils';
import connect from './connect'

const useStyles = makeStyles(theme => ({
    root: {
        // width: '100%',
        // marginTop: theme.spacing(3),
        // overflowX: 'auto',
    },
    table: {
        // width: 600,
    },
    tableTitle: {
        fontSize: 20
    },
    TableCell: {

    }
}));

function SimpleTable(props) {
    const { tableTitle, data, headerTitles, tableSubTitle } = props
    const classes = useStyles();

    console.log(`props of ${tableTitle}`, props.tablesData);

    const tableValues = props.tablesData
    const influencingValues = [tableValues.d10, tableValues.d11, tableValues.d21, tableValues.d22]
    useEffect(() => {
        updateReadOnlyValues()
    }, influencingValues)

    const updateReadOnlyValues = () => {
        if (tableValues.d10 && tableValues.d11) { // d12
            const res = tableValues.d10 - tableValues.d11
            props.actions.updateTablesValues({ values: { d12: res } })
        }
        if (tableValues.d21 && tableValues.d22) { // d23
            const res = tableValues.d21 - tableValues.d22
            props.actions.updateTablesValues({ values: { d23: res } })
        }
    }




    const renderTableData = () => {
        if (!data) return (
            <TableRow>
                <TableCell align="left" className={classes.TableCell}>
                    no data
                </TableCell>
            </TableRow>
        )
        return data.map(row => (
            <TableRow key={row.location}>
                <TableCell align="left" className={classes.TableCell}>
                    {row.name}
                </TableCell>
                {row.units && <TableCell align="left">{row.units}</TableCell>}
                <TableCell align="left">{renderValueType(row, props.actions.updateTablesValues, tableValues,classes)}</TableCell>
            </TableRow>
        ))
    }

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    {tableSubTitle && <TableRow>
                        <TableCell className={classes.tableTitle}
                            colSpan={3}
                            align="left">{tableSubTitle}</TableCell>
                    </TableRow>}
                    {headerTitles
                        ? <TableRow>
                            {headerTitles.map((title) => {
                                return <TableCell key={title} align="left">{title}</TableCell>
                            })}
                        </TableRow>
                        : <TableRow>
                            <TableCell className={classes.tableTitle} align="left">{tableTitle}</TableCell>
                            <TableCell align="left">Value</TableCell>
                            <TableCell align="left">Units</TableCell>
                        </TableRow>}

                </TableHead>
                <TableBody>
                    {renderTableData()}
                </TableBody>
            </Table>
        </Paper>
    );
}

// SimpleTable.defaultProps = {
//     units: true
// };

// SimpleTable.propTypes = {
//     units: PropTypes.bool
// };

export default connect(SimpleTable)