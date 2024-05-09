import React,  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import NavBar from './home/NavBar';
import Banner from './home/Banner';
import MidSlide from './home/MidSlide';
import MidSection from './home/MidSection';
import Slide from './home/Slide';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from './redux/actions/productActions';

const Component = styled(Box)`
    padding: 20px 10px;
    background: grey;
`;

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
        </>
    )
}

export default Home;