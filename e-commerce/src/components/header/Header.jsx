
import Search from './Search';
// import primaryLogo from './primaryLogo.jpeg';
import CustomButtons from './CustomButtons';

import {AppBar, Toolbar, styled, Box} from '@mui/material';

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;               //Default AppBar component height is 64px
`
const Component = styled(Box)`
    margin-left : 12%;
    line-height : 0;
`

// const SubHeading = styled(Typography)`
//     font-size : 10px;
//     font-style : italic;
// `
// const PlusLogo = styled('img')({
//     width : 10,
//     height : 10,
//     marginLeft : 4,
// });

const CustomButtonWrapper = styled(Box)`
    margin : 0 5% 0 auto;
`


const Header = () => {
    //const logoURL = 'e-commerce/public/primaryLogo.jpeg'
    return(
    //     const [open, setOpen] = useState(false);

    // const handleClose = () => {
    //     setOpen(false);
    // }

    // const handleOpen = () => {
    //     setOpen(true);
    // }

        <StyledHeader>
            <Toolbar style={{ minHeight : 55}}>
                <Component>
                  <img src = {require('../../images/Primary_Logo.jpg')} alt="Logo" style={{ width : 48 }} />
                  {/* <Box style={{ display : 'flex'}}> */}
                    {/* <SubHeading> */}
                        {/* Explor&nbsp;     */}
                        {/* &nbsp; -> gives a gap of space. This is a comment*/}
                        {/* <Box component='span' style={{color : 'yellow'}}>Plus </Box> */}
                    {/* </SubHeading> */}
                    {/* <PlusLogo src={logoURL} alt = 'plus img' /> */}
                  {/* </Box> */}
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;