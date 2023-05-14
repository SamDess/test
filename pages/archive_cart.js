// import { useCart } from "react-use-cart";

// export default function Cart() {
//   const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
//     useCart();

//   if (isEmpty) return <p>Your cart is empty</p>;

//   return (
//     <>
//       <div className="flex">
//         <div className="justify-items-start">
//           <h1>Cart ({totalUniqueItems})</h1>
//         </div>

//         <div className="fixed justify-items-end">
//           <ul>
//             {items.map((item) => (
//               <li key={item.id}>
//                 {item.quantity} x {item.name} &mdash;
//                 <button
//                   onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//                 >
//                   -
//                 </button>
//                 <button
//                   onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//                 >
//                   +
//                 </button>
//                 <button onClick={() => removeItem(item.id)}>&times;</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
