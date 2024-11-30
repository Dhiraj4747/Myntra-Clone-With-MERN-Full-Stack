import FetchItems from "../Components/FerchItems";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {useSelector} from "react-redux"
import {Outlet} from "react-router-dom"
import LoadingSpinner from "../Components/LoadingSpinner"

function App() {
  const fetchstatus = useSelector(store=> store.fetchstatus)

  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchstatus.currentlyFetching ? <LoadingSpinner/ > : <Outlet></Outlet>}
      <Outlet/>
      <Footer></Footer>
    </>
  );
}
export default App;
