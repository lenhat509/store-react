import { useSelector } from "react-redux";

const Status = (props) => {
    const status = useSelector(state => state.status);
    return (
        <div className={`animate-fadeout ${status.statusCode === 200 ? 'message-success' : 'message-error'}`}>
            <span>{status.message}</span>
        </div>
    )
}

export default Status;