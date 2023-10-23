import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../../constants/UserConstant";

function Bentley(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("Bentley");
  const [hotBentley, setHotBentley] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(`${BASE_URL}/products/${name}`);
        setHotBentley(data);
      } catch (error) {}
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale iphone">
      <div className="hotsale">
        <h2>{name}</h2>
        {hotBentley ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotBentley)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Bentley;
