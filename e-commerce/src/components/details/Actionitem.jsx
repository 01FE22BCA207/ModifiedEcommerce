
import { Box, Button, styled } from '@mui/material';


const LeftContainer = styled(Box)(({}) =>({
    minWidth: '40%',
    padding: '40px 0 0  80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
   


const Image =styled('img')({
    width: '90%',
    padding: '15px'
});


const StyledButton = styled(Button)(({ theme }) =>({
    width: "48%",
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]:{
        width: '46%'
    },
    [theme.breakpoints.down('sm')]:{
        width: '48%'
    }
}));
  

const ActionItem = ({ product }) => {
    return(
        <LeftContainer>
        <Box style={{ padding: '15px  200px', border: '1px solid #f0f0f0',  width: '90%'}}>
            <Image src={product.detailurl} alt ="product" />
        </Box>
        <StyledButton variant ="contained" style={{marginRight: 10, background: '#f99fee'}}>Add to Cart</StyledButton>
        <StyledButton variant ="contained" style={ {background:'#fb541b'}}>Buy Now</StyledButton>
        </LeftContainer>

    )
}

export default ActionItem;