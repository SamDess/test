import { useCart } from "react-use-cart";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useEffect } from "react";

export default function ShopCartButton() {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();
  let [isOpen, setIsOpen] = useState(false);
  let total;

  useEffect(() => {
    total = items.reduce((a, { price, quantity }) => a + price * quantity, 0);
    console.log(total);
  });

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full fixed bg-[#262626] text-[#FFE5D4] bottom-2 right-2"
        >
          Cart {cartTotal}
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
                <Dialog.Panel className="w-full max-w-[75%] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="grid grid-cols-4 ">
                    <div className="col-span-3">
                      <h1>Cart ({cartTotal})</h1>
                      <ul>
                        {items.map((item) => (
                          <li key={item.id}>
                            {item.quantity} x {item.name}
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                            <button onClick={() => removeItem(item.id)}>
                              &times;
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div> {total} </div>
                  </div>

                  <div className=" mt-4 flex flex-row place-content-between ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                    <a
                      href="/checkout"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Checkout
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
