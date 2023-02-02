
import data from "../data";

function Card(props) {
  return (
    <div className="card overflow-hidden   shadow shadow-black rounded-xl flex-col justify-between p-4 cursor-pointer  w-80">
      <div className="image__spec flex justify-center object-contain p-4 h-36">
        <img src={props.img} />
      </div>
      <h6 className="card__title  font-bold ">{props.title}</h6>
      <div className="card__body leading-6 h-20  ">
        <p className="card__description    leading-6">
          Subscription starting from
          <span className="span__ font-bold ">{props.description}</span> <div />
        </p>
        <p className="card__properties  leading-8">
          Buy at <span className="span__ font-bold ">{props.properties} </span>
          <div />
        </p>
      </div>
      <button className="button rounded-lg p-1 w-full border-2 font-mono font-bold text-base leading-6 border-black ">
        Add to Cart
      </button>
    </div>
  );
}
export default Card;
