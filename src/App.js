import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import "./app.scss";
import Test from "./components/Test";

import { useTranslation, initReactI18next } from "react-i18next";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import i18next from "i18next";
import cookies from 'js-cookie';
import Top from "./components/Top/Top";
import { Contact } from "./components/Contact/Contact";



  // i18next Start

// const languages = [
//   {
//     code: "fr",
//     name: "français",
//     country_code: "fr",
//   },
//   {
//     code: "en",
//     name: "English",
//     country_code: "gb",
//   },
//   {
//     code: "ar",
//     name: "العربية",
//     country_code: "eg",
//     dir:'rtl'
//   },
// ];

// function App() {



//   const currentLanguageCode = cookies.get('i18next') || 'en'
//   const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
//   const { t } = useTranslation()
  
//   console.log(currentLanguageCode ,currentLanguage );

//   const releaseDate = new Date("2021-03-07");
//   const timeDifference = new Date() - releaseDate;
//   const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   const [language, setLanguage] = useState("");

//   const handleChange = (event) => {

//     i18next.changeLanguage(event.target.value)
//   };


//   useEffect(() => {
    
//     document.body.dir = currentLanguage.dir || 'ltr';
//     document.title = t("app_title")
//   }, [currentLanguage , t])
  
//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <Box sx={{ minWidth: 50, padding: "20px" }}>
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={language}
//             label={language}
//             onChange={handleChange}
//           >
//             <MenuItem value={languages[0].code}>{languages[0].name}<span className={`flag-icon flag-icon-${languages[0].country_code}`}></span></MenuItem>
//             <MenuItem value={languages[1].code}>{languages[1].name}<span className={`flag-icon flag-icon-${languages[1].country_code}`}></span></MenuItem>
//             <MenuItem value={languages[2].code}>{languages[2].name}<span className={`flag-icon flag-icon-${languages[2].country_code}`}></span></MenuItem>
//           </Select>
//         </FormControl>
//         <br />
//         <br />
//         <br />
//         <h1> {t("welcome_message")}</h1>
//         <p>{t("days_since_release", { number_of_days })}</p>
//       </Box>
//     </>
//   );
// }

// i18next End

const Layout = () => {
  return (
    <div className='app'>
      <Top />
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/test",
        element: <Test />
      },
      {
        path: "/products/:id",
        element : <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      }
    ]
}
])

function App() {
  return (
    <div>
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
