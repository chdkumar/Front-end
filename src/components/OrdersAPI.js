// import React, { useEffect, useState } from 'react';

// const Orders = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://localhost:8080/api/orders');
//                 const data = await response.json();
//                 setOrders(data.results);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div id="custorder">
//             {orders.map((order) => (
//                 <div key={order.id} className="order">
//                     <datalist>Order ID: {order.id}</datalist>
//                     <datalist>Customer ID: {order.customer_id}</datalist>
//                     <datalist>Total Price: {order.total_price}</datalist>
//                     <datalist>Order Date: {order.created_at}</datalist>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Orders;
