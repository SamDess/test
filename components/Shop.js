import { useCart } from "react-use-cart";
import Modal from './Modal';

export default function Shop ({names}) {
    const { addItem } = useCart();
    return (
    <div className="flex">
      <div className="flex justify-center px-20 border-2 bg-orange-100">
        <h5>shopping cart</h5>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap border-black">
        {names?.map(({ name, quantity, picture}) => (
          <div key={name}><Modal name={name} quantity={quantity} picture={picture} /></div>
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

