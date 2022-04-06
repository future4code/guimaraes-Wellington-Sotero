import React from "react";
import Router from "./Router/Router.js";
import { MainContainer, GlobalStyle, theme } from "./styled";
import Footer from "./components/Footer/Footer";
import { MuiThemeProvider } from "@material-ui/core";



const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <MainContainer>
        <GlobalStyle />
        <Router />
        <Footer />
      </MainContainer>
    </MuiThemeProvider>
  )
}

export default App;