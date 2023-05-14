import { useCart } from "react-use-cart";
import { Popover } from '@headlessui/react'

export default function Shop ({names}) {
    const { addItem } = useCart();
    return (
      <div className="bg-[#FFE5D4]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 w-screen">
          {names?.map(({ name, quantity, picture, id, price, creator, email}) => (
            <div key={id} className="p-4 flex flex-col items-center justify-center rounded-lg ring-offset-2 ring-4 ring-[#2191FB] border-4 border-blue-300 bg-white text-black">
              {picture ? <img className="h-32" src={picture[0].url} /> : ""}
                  <p>{name}</p>
                  <p>{quantity} ct.</p>
                  <p>${price}</p>
                  <button className="rounded-md py-1 px-2 bg-blue-200 text-blue-800 hover:bg-blue-300" onClick={() => addItem({name, quantity, id, price, picture})}>Add to cart</button>
                  <p />
                  {creator ?
                  <Popover>
                    <Popover.Button className="bg-white">i</Popover.Button>
                    <Popover.Panel className="absolute z-10 bg-white border-2">

                         <p>Created by {creator}</p> 
                        {email ? <p>@{email}</p> : ""}

                  </Popover.Panel>
                  </Popover>
                  : ""}
            </div>
          ))}
        </div>
      </div>
    );
}

