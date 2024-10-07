import { useEffect, useState } from "react";
import { getItems } from "./api";
import "./css/BestItem.css";
import Item from "./Item.js";

function BestItem() {
  const [items, setItems] = useState([]);

  const handleLoad = async (options) => {
    let result;
    try {
      result = await getItems(options);
    } catch (error) {
      console.log(error);
    }
    setItems(result.list);
  };

  useEffect(() => {
    const options = {
      pageSize: 4,
      orderBy: "favorite",
    };
    handleLoad(options);
  }, []);

  return (
    <div className="bestItems">
      <div className="bestTitle">베스트 상품</div>
      <div className="items">
        {items && items.length > 0 ? (
          items.map(({ id, images, name, price, favoriteCount }) => (
            <Item
              key={id}
              image={images[0]}
              name={name}
              price={price}
              favoriteCount={favoriteCount}
            />
          ))
        ) : (
          <p>상품을 찾는 중입니다..</p>
        )}
      </div>
    </div>
  );
}

export default BestItem;
