import { connect } from 'react-redux';
import { showInvoice } from '../actions';

import InvoiceList from './InvoiceList';

const mapStateToProps = (state) => {
    return {
        invoices: state.invoices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showInvoice: (invoiceId) => {
            dispatch(showInvoice(invoiceId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);