import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { theme_dark } from "./styles/theme_dark";
import "react-tabs/style/react-tabs.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./hooks/auth";

function App() {
   const [theme, setTheme] = useState(theme_dark);

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <BrowserRouter>
            <AuthProvider>
               <Routes />
               <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
               />
            </AuthProvider>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
