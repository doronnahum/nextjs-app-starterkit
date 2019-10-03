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

    },
    textFieldUNEditable: {
        background: 'lightblue'
    }
}));

function SimpleTable(props) {
    const { data, headerCols, tableTitle, tablesData, waterAnalysisTitle, actions } = props
    const { updateTablesValues } = actions
    const classes = useStyles();

    // console.log(`tablesData`, tablesData);

    const tableValues = tablesData
    // const influencingValues = [
    //     tableValues.d10,
    //     tableValues.d11,
    //     tableValues.d21,
    //     tableValues.d22,
    //     tableValues.e30,
    //     tableValues.d32,
    //     tableValues.f32,
    //     tableValues.d34,
    //     tableValues.d35,
    //     tableValues.d36,
    //     tableValues.d37,
    //     tableValues.d38,
    //     tableValues.d39,
    //     tableValues.d49,
    //     tableValues.e49,
    //     tableValues.d23,
    //     tableValues.d48,
    //     tableValues.d52,
    //     tableValues.e48,
    //     tableValues.e52,
    //     tableValues.d47,
    //     tableValues.e47
    // ]






    const renderTableData = () => {
        if (!data) return <NoDataTableCell className={classes.TableCell} />
        if (headerCols && headerCols[0] === 'Mechanical Properties1') {
            // debugger
        }
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
                        && <WaterAnalysisTitle value={tableValues['e30']}
                            handleInputChange={(e) => handleInputChange(e, updateTablesValues, tableValues)} />}
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