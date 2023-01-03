import React , {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


// i18next Start

// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from 'i18next-http-backend';
// import "flag-icon-css/css/flag-icons.min.css"

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs:['en' , 'fr' , 'ar'] ,
//     fallbackLng: "en",

//     detection: {
//       order: [ "path", "cookie","htmlTag", "localStorage",  "subdomain"],
//       caches: ["cookie"],
//     },
//     backend: {
//       loadPath: '/assets/locales/{{lng}}/translation.json',
//     }
//   });

//   const loadingMarkup = (
//     <div className="py-4 text-center">
//       <h3>Loading..</h3>
//     </div>
//   )


// i18next End

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </React.StrictMode>
    // </Suspense>
);
