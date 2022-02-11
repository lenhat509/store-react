import React, {ReactDOM} from "react";
import { token } from '../actions'
import { connect } from "react-redux";
import Product from "./Product";
const payload = JSON.parse(window.atob(token.split('.')[1]))


class Dashboard extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <>
                {products.map(product => (
                    <Product id={product.id} key={product.id}/>
                ))}
            </>
        )
    }
}

const mapStateToProps = ({users, products}) => {
    return {
        products
    }
}

export default connect(mapStateToProps)(Dashboard);