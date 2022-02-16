import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const Pagination = (props) => {
    const {children, itemsPerPage} = props;
    const [length, setLength] = useState(children.length);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages]  = useState(Math.ceil(length/itemsPerPage));
    const [range, setRange] = useState(getRange(length, page, itemsPerPage));
    const [start, end] = range;
    return (
            <div className='complete-order-card'>
                <ChevronLeftIcon className='page-arrow'/>
                <div className='grow grid grid-cols-3 gap-x-2 pl-2 pr-2'>
                    {children.filter((_, index) => index>= start && index <= end)}
                </div>
                <ChevronRightIcon className='page-arrow right-full '/>
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