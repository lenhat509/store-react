import React, {ReactDOM} from "react";
import { useSelector } from "react-redux";
import Product from "./Product";



const Dashboard = (props) => {
    const products = useSelector(state => state.products);
    return (
        <div className='p-2'>
                {products.map(product => (
                    <Product id={product.id} key={product.id}/>
                ))}
        </div>
    )
}


export default Dashboard;