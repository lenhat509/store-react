import { Container, Grid } from '@mui/material';
import React, {ReactDOM} from 'react';
import { connect } from 'react-redux';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';

class Product extends React.Component {

    render() {
        const {detail} = this.props;
        return (
            <Grid container sx={{
                border: 1,
                height: 1/10,
                margin: 1,
                padding: 1,
                borderRadius: 2,
                borderColor:'primary.light'
            }}>
                <Grid item xs={12} md={2}>
                    <Avatar variant="circular">
                    {detail.username}
                    </Avatar>
                </Grid>
                <Grid item xs={12} md={10} >
                    <Grid>
                        <Grid item xs={12} md={12}>
                            <span>{detail.name}</span>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <span>{detail.price}</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({users, products}, props) =>{
    const { id } = props;
    const product = products.filter(product => product.id === id)[0];
    return {
        detail : {
            ...product,
            username: users[product.user_id].firstname + ' ' + users[product.user_id].lastname
        }
    }
}

export default connect(mapStateToProps)(Product);