import { useCart } from "react-use-cart";

export default function Shop ({names}) {
    const { addItem } = useCart();
    return (
    <div className="flex">
      <div className="flex justify-center px-20 border-2 bg-orange-100">
        <h5>shopping cart</h5>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap border-black">
        {names?.map(({ name, quantity, picture}) => (
          <div key={name}>
            {picture ? <img className="h-2/3" src={picture[0].url} /> : ""}
                <p>{name}</p>
                <p>{quantity}</p> {/*  className="absolute inset-x-0 bottom-0 h-16 w-16" */}
          </div>
        ))}
        {names?.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
        ))}
      </div>
    </div>
    );
}

