import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
