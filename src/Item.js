import "./css/Item.css";
import heart from "./img/icon/icon_heart.png";

function Item({ image, name, price, favoriteCount }) {
  return (
    <div className="Item">
      <img className="image" src={image} alt={name} />
      <div className="title">{name}</div>
      <div className="price">{price} 원</div>
      <div className="likeCount">
        <img src={heart} alt="하트 아이콘" />
        {favoriteCount}
      </div>
    </div>
  );
}

export default Item;