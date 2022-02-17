import { useState, useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const Pagination = (props) => {
    const {children, itemsPerPage} = props;
    const [length, setLength] = useState(children.length);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages]  = useState(Math.ceil(length/itemsPerPage));
    const range = getRange(length, page, itemsPerPage)
    const [start, end] = range;
    const handleNextPage = () => {
        setPage(prev => {
            if(prev + 1 > maxPages)
                return prev
            else 
            {
                return prev + 1;
            }
        })
    }
    const handlePreviousPage = () => {
        setPage(prev => {
            if(prev - 1 < 1)
                return prev
            else 
            {
                return prev - 1;
            }
        })
    }
    return (
            <div className='complete-order-card'>
                <ChevronLeftIcon className='page-arrow' onClick={handlePreviousPage}/>
                <div className='grow grid grid-cols-3 gap-x-2 pl-2 pr-2'>
                    {children.filter((_, index) => index>= start && index <= end)}
                </div>
                <ChevronRightIcon className='page-arrow' onClick={handleNextPage}/>
            </div>
    )
}
const getRange = (length, page, itemsPerPage) => {
    const start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage - 1;
    if(end >= length)
        end = length - 1;
    return [start, end]
}

export default Pagination;