import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../Store/itemSlice";
import { fetchSliceAction } from "../Store/fetchStausSlice";
function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchSliceAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchSliceAction.markFetchDone());

        dispatch(fetchSliceAction.markFetchDone());

        dispatch(markFetchingFinished());
        dispatch(itemActions.addIntialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      
    </>
  );
}
export default FetchItems;
