import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { renderValueType, handleInputChange } from './utils'
import Input from '@material-ui/core/Input';
import TableTitle from 'src/components/table/TableTitle'
import HeaderCols from 'src/components/table/HeaderCols'
import NoDataTableCell from 'src/components/table/NoDataTableCell'
import WaterAnalysisTitle from 'src/components/table/WaterAnalysisTitle'
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
    const { data, headerCols, tableTitle, tablesData, waterAnalysisTitle, actions } = props
    const { updateTablesValues } = actions
    const classes = useStyles();

    console.log(`tablesData`, tablesData);

    const tableValues = tablesData
    const influencingValues = [
        tableValues.d10,
        tableValues.d11,
        tableValues.d21,
        tableValues.d22,
        tableValues.e30,
        tableValues.d32,
        tableValues.f32,
        tableValues.d34,
        tableValues.d35,
        tableValues.d36,
        tableValues.d37,
        tableValues.d38,
        tableValues.d39,
    ]

    useEffect(() => {
        updateReadOnlyValues()
    }, influencingValues)

    const updateReadOnlyValues = () => {
        if (tableValues.d10 && tableValues.d11) { // d12
            const res = tableValues.d10 - tableValues.d11
            updateTablesValues({ values: { d12: res } })
        }
        if (tableValues.d21 && tableValues.d22) { // d23
            const res = tableValues.d21 - tableValues.d22
            updateTablesValues({ values: { d23: res } })
        }
        if (tableValues.e30 && tableValues.d32) { // e32
            const res = tableValues.e30 * tableValues.d32
            updateTablesValues({ values: { e32: res } })
        }
        if (tableValues.e30 && tableValues.d32) { // f32
            const res = tableValues.e30 * tableValues.d32
            updateTablesValues({ values: { f32: res } })
        }
        if (tableValues.f32 && tableValues.d32 && tableValues.d34) { // f34
            const res = tableValues.f32 / tableValues.d32 * tableValues.d34
            updateTablesValues({ values: { f34: res } })
        }
        if (tableValues.f32 && tableValues.d32 && tableValues.d35) { // f35
            const res = tableValues.f32 / tableValues.d32 * tableValues.d35
            updateTablesValues({ values: { f35: res } })
        }
        if (tableValues.f32 && tableValues.d32 && tableValues.d36) { // f36
            const res = tableValues.f32 / tableValues.d32 * tableValues.d36
            updateTablesValues({ values: { f36: res } })
        }
        if (tableValues.f32 && tableValues.d32 && tableValues.d37) { // f37
            const res = tableValues.f32 / tableValues.d32 * tableValues.d37
            updateTablesValues({ values: { f37: res } })
        }
        if (tableValues.f32 && tableValues.d32 && tableValues.d38) { // f38
            const res = tableValues.f32 / tableValues.d32 * tableValues.d38
            updateTablesValues({ values: { f38: res } })
        }
        if (tableValues.f32 && tableValues.d32 && tableValues.d39) { // f39
            const res = tableValues.f32 / tableValues.d32 * tableValues.d39
            updateTablesValues({ values: { f39: res } })
        }
    }




    const renderTableData = () => {
        if (!data) return <NoDataTableCell className={classes.TableCell} />
        return data.map((row, i) => {
            return <TableRow key={i}>
                <TableCell align="left" className={classes.TableCell}>
                    {row.name}
                </TableCell>

                {row.units &&
                    <TableCell align="left">
                        {row.units}
                    </TableCell>}

                {row.fields
                    ? row.fields.map((field) => {
                        return <TableCell key={field.location} align="left">
                            {renderValueType(field, updateTablesValues, tableValues, classes)}
                        </TableCell>
                    })
                    : <TableCell align="left">{renderValueType(row, updateTablesValues, tableValues, classes)}</TableCell>
                }
            </TableRow>
        })
    }

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    {tableTitle && <TableTitle className={classes.tableTitle} tableTitle={tableTitle} />}
                    {/* happens only in Water Analysis table */}
                    {waterAnalysisTitle
                        && <WaterAnalysisTitle value={tableValues['e30'] || ''}
                            handleInputChange={(e) => handleInputChange(e, updateTablesValues)} />}
                    {/* ---- */}
                    {headerCols && <HeaderCols data={headerCols} />}
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