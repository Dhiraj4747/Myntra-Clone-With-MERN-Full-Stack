import BagItem from "../Components/BagItem";
import BagSummary from "../Components/Bagsummary";
import {useSelector} from "react-redux"

function Bag(){

  const bagItems= useSelector(store=> store.bag)
  const items = useSelector(store => store.items)
  const finalItems = items.filter(item=>{
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex >= 0;
  })
   return<>
   
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item => <BagItem item={item}/>)}
          
        </div>
        <BagSummary/>

      </div>
    </main>
   </>
}
export default Bag;