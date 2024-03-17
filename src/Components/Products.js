import React, { useEffect, useState } from 'react';
import api from '../Apis/api';
import ProductGrid from './ProductGrid';
import CatagoriesStack from './CatagoriesStack';
import Carousel from 'react-material-ui-carousel'
import Image1 from '../Assets/Images/a4a8dbe8961ad8d0.webp'
//import HighlightedCode from 'docs/src/modules/components/HighlightedCode';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [catagories, setCatagories] = useState([]);
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: Image1
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: Image1
    }
  ]
  useEffect(() => {
    fetchPrducts();
    //fetchCatagories();
  }, [])
  const fetchPrducts = async () => {
    try {
      const response = await api.getProducts();
      console.log("response", response.data);
      setProducts(response.data);
      //console.log(response.data) // Assuming the user data is in the 'data' property of the response
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const fetchCatagories = async () => {
    try {
      const response = await api.getCatagories()
      console.log("cat-response", response.data);
      setCatagories(response.data);
      //console.log(response.data) // Assuming the user data is in the 'data' property of the response
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  //console.log(data.length())
  return (
    <div style={{
      display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: '100px',
      marginLeft: '100px',
      //borderRight: '0.5px solid grey', borderLeft: '0.5px solid grey'
      //background:'#F6F5F5'
    }}>
      <div style={{ marginBottom: '20px', display: 'flex', background: '#FFFFFF', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
        {/* {

          catagories.length > 0 ? ( */}
        <CatagoriesStack data={catagories} />
        {/* ) : (
            <div>
              Loading...........
            </div>
          )

        } */}

      </div>
      <div style={{ display: 'flex', width: '100%', border: '1px solid red' }}>
        <Carousel>
          {items.map((item, i) => (
            <div key={i}>
              <img src={item.image} alt={`Image ${i}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div style={{ width: '100%', background: '#FFFFFF', }}>
        {

          products.length > 0 ? (
            <ProductGrid data={products} />
          ) : (
            <div>
              Loading...........
            </div>
          )

        }
      </div>
    </div>
  );
}
export default Products;