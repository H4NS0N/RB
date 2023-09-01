import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/footer";
import Header from "./components/Header";
import Forside from "./pages/Forside";
import Registrering from "./pages/registrering";
import Artikel from "./pages/artikel";
import OmRB from "./pages/omRB";
import Nyheder from "./pages/nyheder";
import Medlemskab from "./pages/medlemskab";
import KampOversigt from "./pages/kampoversigt";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DCDCDC", //lys grå
    },
    secondary: {
      main: "#F3B820", //orange
    },
  },
  typography: {
    fontFamily: "Quicksand",
    footerHeading: {
      fontSize: 30,
      fontWeight: 700,
    },
    bannerHeading: {
      fontSize: 100,
      fontWeight: 400,
    },
    bannerSubtitle: {
      fontSize: 75,
      fontWeight: 300,
    },
    imageSubText: {
      fontSize: 12,
      fontWeight: 400,
    },
    latestNewsTitle: {
      fontSize: 20,
      fontWeight: 600,
      color: "#FFFFFF",
    },
    latestNewsDate: {
      fontSize: 13,
      fontWeight: 600,
      color: "#FFFFFF",
    },
    blueBtn: {
      fontSize: 25,
      fontWeight: 600,
      color: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Forside />} />
            <Route path="registrering" element={<Registrering />} />
            <Route path="artikel" element={<Artikel />} />
            <Route path="om-rb" element={<OmRB />} />
            <Route path="nyheder" element={<Nyheder />} />
            <Route path="medlemskab" element={<Medlemskab />} />
            <Route path="kampoversigt" element={<KampOversigt />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
