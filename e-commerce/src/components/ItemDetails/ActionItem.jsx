
import { Box, Button, styled } from '@mui/material';
//import { dealData } from '../../Constant/data';


const LeftContainer = styled(Box)(({theme}) =>({
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
  

const ActionItem = ({product}) => {
    return(
        <LeftContainer>
        <Box style={{ padding: '15px  180px', border: '1px solid #f0f0f0',  width: '50%'}}>
            <Image src={product.detailUrl}  alt='product' />
        </Box>
        <StyledButton variant ="contained" style={{marginRight: 10, background: '#f99fee'}}>Add to Cart</StyledButton>
        <StyledButton variant ="contained" style={ {background:'#fb541b'}}>Buy Now</StyledButton>
        </LeftContainer>

    )
}

export default ActionItem;