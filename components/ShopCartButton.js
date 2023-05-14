import { useCart } from "react-use-cart";
import { useForm } from 'react-hook-form'
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
// import { get as fetch } from 'axios'

export default function ShopCartButton() {
  const { items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();
  let [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (d) => {
    const asString = new URLSearchParams(d).toString();
    fetch('/api/create?' + asString + '&total=' + items.reduce((a, { price, quantity }) => a + price * quantity, 0) + '&order=' + items.map(({ name, quantity }) => `${name}: ${quantity}`).join(', '))
    .then(r => 
    {alert("Order placed!")
    emptyCart();
    setIsOpen(false);
  });
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full fixed bg-white text-black border-2 border-black bottom-2 right-2 p-2"
        >
          🛒 Cart: {cartTotal} items
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[92%] lg:max-w-[75%]  transform rounded-2xl bg-white text-black p-6 text-left align-middle shadow-xl transition-all">
                <section>
  <h1 className="sr-only">Checkout</h1>

  <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
    <div className="bg-gray-50 py-12 md:py-24 rounded-lg">
      <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        <button onClick={() => setIsOpen(false)} className="hover:scale-125 transition hover:duration-200 w-5 h-5"><svg viewBox="0 0 8 7" xmlns="http://www.w3.org/2000/svg">
<path d="M0.397095 3.62097C0.397095 3.74337 0.44397 3.85014 0.53772 3.94128L3.11194 6.5116C3.20308 6.60014 3.30595 6.64441 3.42053 6.64441C3.54032 6.64441 3.64058 6.60535 3.72131 6.52722C3.80204 6.4491 3.84241 6.35144 3.84241 6.23425C3.84241 6.17436 3.83069 6.11837 3.80725 6.06628C3.78381 6.0142 3.75256 5.96863 3.7135 5.92957L2.8385 5.04675L1.38538 3.71863L1.24475 3.96863L2.60022 4.04675H7.34631C7.47652 4.04675 7.58069 4.00769 7.65881 3.92957C7.73954 3.84884 7.77991 3.74597 7.77991 3.62097C7.77991 3.49337 7.73954 3.3905 7.65881 3.31238C7.58069 3.23165 7.47652 3.19128 7.34631 3.19128H2.60022L1.24475 3.27332L1.38538 3.52722L2.8385 2.19519L3.7135 1.30847C3.75256 1.26941 3.78381 1.22514 3.80725 1.17566C3.83069 1.12358 3.84241 1.06628 3.84241 1.00378C3.84241 0.886597 3.80204 0.78894 3.72131 0.710815C3.64058 0.63269 3.54032 0.593628 3.42053 0.593628C3.36324 0.593628 3.30855 0.605347 3.25647 0.628784C3.20439 0.652222 3.15491 0.687378 3.10803 0.734253L0.53772 3.30066C0.44397 3.39181 0.397095 3.49858 0.397095 3.62097Z" fill="black"/>
</svg>
</button>
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full border border-black" src="https://upload.wikimedia.org/wikipedia/en/2/2a/Brandeis_High_School_Mascot.png" />

          <h2 className="font-medium text-gray-900">Bronco Store</h2>
        </div>

        <div>
          <p className="text-2xl font-medium tracking-tight text-gray-900">
            ${items.reduce((a, { price, quantity }) => a + price * quantity, 0)}
          </p>

          <p className="mt-1 text-sm text-gray-600">For the purchase of {items.length ? "" : "absolutely nothing!"}</p>
        </div>

        <div>
          <div className="flow-root">
            <ul className="-my-4 divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-4">
                  {item.picture ? <img
                    src={item.picture[0].url}
                    alt=""
                    className="h-16 w-16 rounded object-cover"
                  /> :
                  <img
                    src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
                    alt=""
                    className="h-16 w-16 rounded object-cover"
                  />
                  }

                  <div>
                    <h3 className="text-sm text-gray-900">{item.name}</h3>

                    <dl className="my-0.5 space-y-px text-xs text-gray-600">
                      <div>
                        {item.quantity} x ${item.price} each
                      </div>
                    </dl>
                    <div className="flex flex-row gap-1">
                      <button
                        className="bg-slate-300 w-5 h-5 flex items-center justify-center rounded hover:bg-slate-400"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="bg-slate-300 w-5 h-5 flex items-center justify-center rounded hover:bg-slate-400"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button className="bg-red-300 w-5 h-5 flex items-center justify-center rounded hover:bg-red-400" onClick={() => removeItem(item.id)}>
                        &times;
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              {...register("firstName", { required: true })}
              type="text"
              id="FirstName"
              className="px-2 py-1 mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm h-8 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-3">
            <label
              htmlFor="LastName"
              className="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              {...register("lastName", { required: true })}
              type="text"
              id="LastName"
              className="px-2 py-1 mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm h-8 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              {...register("email", { required: true })}
              type="email"
              id="Email"
              className="px-2 py-1 mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm h-8 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="sNumber" className="block text-xs font-medium text-gray-700">
              S-Number
            </label>

            <input
              {...register("sNumber", { required: true, maxLength: 6 })}
              type="tel"
              id="sNumber"
              className="px-2 py-1 mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm h-8 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-6">
            <input
              type="submit"
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg hover:bg-gray-500"
              value="Order Now"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
