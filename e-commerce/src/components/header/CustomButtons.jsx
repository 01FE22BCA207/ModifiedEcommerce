
import { useState } from 'react';
import { Box, Button, Typography, styled, } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDailog';


const Wrapper = styled(Box)`
    display : flex;
    margine : 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right : 40px;
        font-size : 16px;
        align-items : center;

    }
`;

const Container = styled(Box)`
    display : flex ;

`;

const LoginButton = styled(Button)`
    color : blue;
    background : white;
    text-transform : none;
    padding : 5px 45px
    border-radius : 2px;
    box-shadow : none;
    height : 32px;
    font-weight : 600;

`;

const CustomButtons = () => {
    const [open,setOpen]=useState(false);
    const openDialog = () =>{
        setOpen(true);
    }
    return(
        <Wrapper>
            <LoginButton variant= "contained" onClick={()=>openDialog()}>Login</LoginButton>

             <LoginDialog open={open} setOpen={setOpen} />
            <Typography style={{ marginTop : 3, width : 135}}>Become a Seller</Typography>
            <Typography style={{ marginTop : 3}}>More</Typography>
            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>  
        </Wrapper>
    )
}


export default CustomButtons;