import Pagination from "./Pagination";

const CompleteOrder = (props) => {
    const { order, id} = props;
    const totalPrice = Object.keys(order).reduce((prev, curr) => {
        const price = order[curr].price * order[curr].quantity;
        return prev + price;
    },0)
    return (
        <div className='m-2 flex flex-col text-violet-700'>
            <div>{`Order ${id}`}</div>
            <Pagination itemsPerPage={3} >
                {Object.keys(order).map(id => (
                        <div className='complete-product-card' key={id}>
                            <div className='text-3xl mb-2' >{order[id].name}</div>
                            <div className='text-sm text-violet-400'>{'Seller: ' + order[id].seller}</div>
                            <div className='text-sm text-violet-500'>{'Price: '+ order[id].price}</div>
                            <div className='text-sm text-violet-500'>{'Quantity: '+ order[id].quantity}</div>
                        </div> 
                ))}
            </Pagination>
            <div className='self-end'>{`Total: ${totalPrice}$`}</div>
        </div>
    )
}

export default CompleteOrder;