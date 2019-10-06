import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateSavings } from 'src/store/tables/actions';
import { getTablesData } from 'src/store/tables/selectors';

const mapStateToProps = state => ({
    tablesData: getTablesData(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        calculateSavings
    }, dispatch),
});

export default comp => connect(mapStateToProps, mapDispatchToProps)(comp);
