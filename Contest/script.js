// getting classes 
let container = document.getElementById('container')
//  fetching data from api using .then & async, await

const table = document.getElementById('table')

async function getInfo() {
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
const response = await fetch(url)
console.log(response);
const data = await response.json();
return data;
}

async function callGetInfo(){
    const responseData = await getInfo();
    console.log(responseData);
    let tableData ='';
    responseData.map((values,index) =>{
        tableData += 
        `<tr>
            <td><img src = "${values.image}"/></td>
            <td>${values.name}</td>
            <td>${values.symbol}</td>
            <td>${values.current_price}</td>
            <td>${values.total_volume}</td>
            <td class = "${values.price_change_percentage_24h > 0 ? "postiveValues" : "negativeValues"}"> ${values.price_change_percentage_24h}"</td>
            <td>Mkt cap : ${values.market_cap}</td>
        </tr>`
    })

    document.getElementById('table').innerHTML = tableData;
}

callGetInfo();



// // getting classes 
// let container = document.getElementById('container')
// //  fetching data from api using .then & async, await

// const table = document.getElementById('table')

// async function getInfo() {
// const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
// fetch(url) 
// .then((res) => {
//     return res.json();
// })
//     .then((info) => {
//         console.log(info);
//         for(var i =0; i< info.length; i++){
//         const node = document.createElement("tr")
//         const img = document.createElement("img")
//         img.src = info[i].image;
//         node.appendChild(img);

//         //2.name
//         const nameNode = document.createElement("td")
//         const nameText = document.createTextNode(info[i].name);
//         nameNode.appendChild(nameText);
//         node.appendChild(nameNode);

//         //3. symbol
//          //for symbol
//            const symbolNode = document.createElement("td")
//            const symbolText = document.createTextNode(info[i].symbol);
//            symbolNode.appendChild(symbolText);
//            node.appendChild(symbolNode);

     
//         //4.current_price
//          //current price
        
//          const priceNode = document.createElement("td")
//          const priceText = document.createTextNode(info[i].current_price);
//          priceNode.appendChild(priceText);
//          node.appendChild(priceNode); 

//         //5. Percent change
//         const percentNode = document.createElement("td")
//         const percentText = document.createTextNode(info[i].price_change_percentage_24h);
//         percentNode.appendChild(percentText);
//         node.appendChild(percentNode); 



//         //5.market_cap
//        //market_cap
       
//        const marketNode = document.createElement("td")
//         const marketText = document.createTextNode(info[i].market_cap);
//         marketNode.appendChild(marketText);
//         node.appendChild(marketNode);
       
    
//         table.appendChild(node);
//         }
//         // console.log(array)
//     })
// }
// getInfo()