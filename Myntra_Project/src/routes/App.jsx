import FetchItems from "../Components/FerchItems";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeItem from "../Components/HomeItem";
import {Outlet} from "react-router-dom"
function App() {
  
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      <Outlet/>
      <Footer></Footer>
    </>
  );
}
export default App;
