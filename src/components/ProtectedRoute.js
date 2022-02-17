import { Navigate, useNavigate, useLocation, Route} from 'react-router-dom'

const ProtectedRoute = (props) => {
    const location = useLocation();
    const token = localStorage.getItem('app-token');
    const payload = token ? JSON.parse(window.atob(token.split('.')[1])) : null;
    const { ...rest} = props;
    return (
        <>
        {payload ? 
            <Route {...rest}/> :
            <Navigate to='/login' state={{from:  location}}/> 
        }
        </>
    )
}