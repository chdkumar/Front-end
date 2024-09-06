// async function fetchdata() {
//     try {
//         const response = await fetch('https://localhost:8080/api/orders');
//         const data = await response.json();
//         const myorder = data.results;
//         const custorder = document.getElementById("custorder");

//         myorder.forEach((element) => {
//             const orderdiv = document.createElement("div");
//             orderdiv.classList.add("order");

//         const orderid = document.createElement("datalist");
//         orderid = element.id;

//         const orderdate = document.createElement("datalist");
//         customerid = element.customer_id;

//         const totalprice = document.createElement("datalist");
//         totalprice = element.total_price;

//         const orderstatus = document.createElement("datalist");
//         orderdate = element.created_at;

//         orderdiv.appendChild(orderid.setAttribute("id", orderid.toString()));
//         orderdiv.appendChild(orderdate.setAttribute("orderdate", orderdate.toString()));
//         orderdiv.appendChild(totalprice.setAttribute("totalprice", totalprice.toString()));
//         orderdiv.appendChild(orderstatus.setAttribute("orderstatus", orderstatus.toString()));

//         custorder.appendChild(orderdiv);

//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }

    
// }
// fetchdata();