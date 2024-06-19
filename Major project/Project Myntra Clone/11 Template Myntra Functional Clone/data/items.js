const items = [
    {
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: 'images/2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: 'images/3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'images/4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'images/5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: 'images/6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'images/7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: 'images/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];
let item=document.querySelector(".bag-item-container");

let bagItemID=localStorage.getItem('bag_count');

bagItemID=JSON.parse(bagItemID);

let bagItemObj;
loadBagItem();
onload()
function onload() {
 display_bag_items();
 display_bag_summary();
}

function loadBagItem() {
   bagItemObj=bagItemID.map(itemID=>{
        for (let i = 0; i < items.length; i++) {
            if(itemID==items[i].id) return items[i];
            
        }
    });
}
function remove_item(i) {
  
 bagItemID=bagItemID.filter(bagItemID=>bagItemID!=i);
 localStorage.setItem('bag_count',JSON.stringify(bagItemID))
 loadBagItem();
display_bag_items();
display_bag_summary();
}
function display_bag_items() {
let inhtml='';
bagItemObj.forEach(i => {
     inhtml+=`
<div class="bag-item-container">
  <div class="item-left-part">
    <img src="1.jpg"class="bag-item-img" >
  </div>
  <div class="item-right-part">
    <div class="company">${i.company}</div>
    <div class="item-name">${i.item_name}</div>
    <div class="price-container">
      <span class="current-price">${[i].current_price}</span>
      <span class="original-price">${[i].original_price}</span>
      <span class="discount-percentage">(${[i].discount_percentage} OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${i.return_period}</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${[i].delivery_date}</span>
    </div>
  </div>

  <div class="remove-from-cart" onclick="remove_item(${i.id})"">X</div>
</div>

`
;
} 
);
item.innerHTML=inhtml;
}


 function display_bag_summary() {
   let bag_dc=document.querySelector('.bag-details-container'); let NOI=0;
    let discountMRP=0;
    let totalMRP=0;
    let finalMRP=0;
    bagItemObj.forEach(i=>
        { NOI++;
            totalMRP+=i.original_price;
            discountMRP+=i.original_price-i.current_price;
            finalMRP=totalMRP-discountMRP;
        }
    )
   
   bag_dc.innerHTML=`
 <div class="price-header">PRICE DETAILS(${NOI} Items)</div>
 
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${discountMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalMRP}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
 
 `;  
 }
 
 



// s.forEach(element => {
//     i+=element; 
//     console.log(items[element])
// });
//  console.log(items[1].item_name);

//   let element=``;
//   i=1;


// bagItemID.forEach(item => {
//     inhtml+=`
//     <div class="bag-items-container">
//     <div class="bag-item-container">
//       <div class="item-left-part">
//         <img class="bag-item-img" src="../images/4.jpg"> item
//       </div>
//       <div class="item-right-part">
//         <div class="company">ADIDAS</div>
//         <div class="item-name">  Men Printed Polo Collar Indian Cricket ODI Jersey</div>
//         <div class="price-container">
//           <span class="current-price">Rs 999</span>
//           <span class="original-price">Rs 999</span>
//           <span class="discount-percentage">(0% OFF)</span>
//         </div>
//         <div class="return-period">
//           <span class="return-period-days">14 days</span> return available
//         </div>
//         <div class="delivery-details">
//           Delivery by
//           <span class="delivery-details-days">10 Oct 2023</span>
//         </div>
//       </div>

//       <div class="remove-from-cart">X</div>
//     </div>

//   </div>
//     `;
// });


