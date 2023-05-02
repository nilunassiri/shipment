import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { tuggleStatus, save } from "features/shipment/shipmentSlice";

function getShipment() {
  const dispatch = useDispatch();
  const shipmentSlicer = useSelector((state) => state.shipment);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";

  useEffect(() => {
    if (shipmentSlicer.status === false) {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          dispatch(tuggleStatus());
          dispatch(save(response.data));
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setData(shipmentSlicer.value);
    }
  }, [url]);

  return { data, loading, error };
}

export default getShipment;
