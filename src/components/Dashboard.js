import React, {ReactDOM} from "react";
import { token } from '../actions'
import { connect } from "react-redux";
import Product from "./Product";
const payload = JSON.parse(window.atob(token.split('.')[1]))


class Dashboard extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className='grid gap-3 text-center p-2'>
                {products.map(product => (
                    <Product id={product.id} key={product.id}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({users, products}) => {
    return {
        products
    }
}

export default connect(mapStateToProps)(Dashboard);