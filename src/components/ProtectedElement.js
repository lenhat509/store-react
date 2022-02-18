import { Navigate, useNavigate, useLocation, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedElement = (props) => {
    const {children} = props
    const location = useLocation();
    const user = useSelector(state => state.token.user);
    if(user)
        return children
    else return <Navigate to='/login' state={{from:  location}} replace/> 
}

export default ProtectedElement;