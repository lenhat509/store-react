import { useSelector } from "react-redux";

const Status = (props) => {
    const status = useSelector(state => state.status);
    return (
        <div 
            key={Math.random()}
            className={status.statusCode === 200 ? 'animate-fadeout message-success' : 'animate-fadeout message-error'}>
            <span>{status.message}</span>
        </div>
    )
}

export default Status;