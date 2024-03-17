import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import fashionImage from '../Assets/Images/0d75b34f7d8fbcb3.webp';
import electronicsImage from '../Assets/Images/69c6589653afdb9a.webp';
import groceriesImage from '../Assets/Images/29327f40e9c4d26b.webp';
import toysImage from '../Assets/Images/dff3f7adcf3a90c6.webp';
import furnitureImage from '../Assets/Images/ab7e2b022a4587dd.webp';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CatagoriesStack = (props) => {
    const [catagories, setcatagories] = useState([

        { id: 1, name: 'Groceries', image: groceriesImage },
        { id: 2, name: 'Electronics', image:electronicsImage },
        { id: 3, name: 'Fashion', image:fashionImage },
        { id: 4, name: 'Home & Furniture', image: furnitureImage },
        { id: 5, name: 'Beauty,toys & More', image: toysImage }
    ]);


    return (
        <div style={{ display: 'flex', background: '#FFFFFF', height: '100px', alignItems: 'center' }}>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={5}
            >
                {
                    catagories.map((item) => (
                        // <Item key={item.id} id={item.id}>{item.name}</Item>
                        <div key={item.id} id={item.id} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <img src={item.image} alt="" width="50" height="50" />
                            <span >{item.name}</span>
                        </div>
                    ))
                }
            </Stack>
        </div>
    )
}

export default CatagoriesStack