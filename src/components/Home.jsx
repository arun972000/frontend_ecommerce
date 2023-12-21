/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import HomeCards from "./HomeCrads";
import { Url } from "../Url";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "./Banner";
import Overview from "./overview";
import AboutSection from "./info";
import { ToastContainer } from "react-toastify";





const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const [data, setData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${Url}/products/${selectedCategory}`);
      setData(response.data.products)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [selectedCategory])

  return (
    <>
    

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Banner />
      <div className="container">
        <Overview />

        <FormControl sx={{ m: 1, minWidth: 150 }}>

          <InputLabel id="demo-simple-select-autowidth-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedCategory}
            onChange={handleChange}
            autoWidth
            label="Categories"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="/category/smartphones">Smartphones</MenuItem>
            <MenuItem value="/category/laptops">Laptops</MenuItem>
            <MenuItem value="/category/fragrances">Fragrances</MenuItem>
            <MenuItem value="/category/skincare">Skincare</MenuItem>
            <MenuItem value="/category/groceries">Groceries</MenuItem>
            <MenuItem value="/category/home-decoration">Home-decoration</MenuItem>
          </Select>
        </FormControl>
        <div className="row">
          <Carousel responsive={responsive} containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]} infinite={true}>
            {data.map(item => (<HomeCards key={item.id} item={item} />))}
          </Carousel>
        </div>

      </div>
      <AboutSection />
    </>
  )
}

export default Home