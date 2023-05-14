import { useCart } from "react-use-cart";
import { useForm } from "react-hook-form";

export default function Checklist() {
  const { items, updateItemQuantity, removeItem,  } = useCart();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (d) => {
    fetch('/api/create?name=' + d.name)
    .then(r => alert(r.data));
  }
  let total = items.reduce((a, { price, quantity }) => a + price * quantity, 0);
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
    <label htmlFor="name"> s number (required)</label>
    <input className="bg-gray-200 border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600" type="text" id="name" placeholder="Orpheus Haxx" {...register("name", { required: true })} />
    <input type="submit" className="bg-blue-500 text-white py-2 hover:bg-blue-600 rounded-xl font-bold" value="Submit"/>
  </form>

  return (
    <div style={{
      backgroundImage:"url(https://images.pexels.com/photos/2832767/pexels-photo-2832767.jpeg?cs=srgb&dl=pexels-magda-ehlers-2832767.jpg&fm=jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
    <div className="bg-sky-400 bg-opacity-30">
      <p className="flex justify-center text-4xl pt-1.5 text-[#FFE5D4]">Checkout</p>
    <div className="grid grid-cols-3 p-12 ">
      <div className="col-span-1 px-2">
        {items.map((item) => (
          <ul className="list-none">
          <li key={item.id}>
            <div className="flex flex-col items-start border-4 border-[#8338EC] bg-white">
            {item.picture ? (
              <img className="h-32" src={item.picture[0].url} />
            ) : (
              ""
            )}
            {item.quantity} x {item.name}
            {item.creator ? (
              <p className="rounded-full border border-2 ">
                Created by {item.creator}
              </p>
            ) : (
              ""
            )}
            {item.email ? (
              <p>If you have questions, contact them at @{item.email}</p>
            ) : (
              ""
            )}
            <div className="grid grid-cols-4">
            <div className="">
            qt: {item.quantity}
            </div>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
            </div>
            </div>
          </li>
          </ul>
        ))}
      </div>
      <div className="col-span-1"/>

      <div className="flex col-span-1 p-12 ">
        <div className="min-h-screen container mx-auto justify-center px-12 py-16 ">
        <ul className="px-12 py-6 list-none bg-[#FFE5D4]">
          {items.map((item) => (
            <li key={item.id}>${item.quantity * item.price}</li>
          ))}
          Total = ${total}
        </ul>
      </div>
    </div>      
      <a
        href="/"
        className="rounded-full fixed bg-[#FFE5D4] text-[#262626] bottom-2 right-2"
      >
        Go Back
      </a>    
      </div>
      </div>
      </div>
  );
}
