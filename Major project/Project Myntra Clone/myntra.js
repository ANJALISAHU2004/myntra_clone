 
//  if(!item) return;
 function onload() {
    let str_bag_items=localStorage.getItem('bag_count');
    bagItems=str_bag_items?JSON.parse(str_bag_items):[];
    displayItemONHomePage();
    display_bag();
  }
 
 let items=document.querySelector(".items_container");
 //let item={
//  image:'Project Myntra Clone/images/images/1.jpg',
//  company:'Carlton London',
//  name:'earings',
//  rating:{
//  stars:4.5,
//  reviews:1400
//  },
//  price:1199,
//  discounted_price:699,
//  discounted_percentage:43+'%',
//  }
 const item = [
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
    }];
function displayItemONHomePage()
{
let ihtml='';
item.forEach(item => {
    ihtml+=`<div class="item_contianer">
            <img class="item_image"
            src="Project Myntra Clone/images/${item.image}" alt="">
            <div class="rating">${item.rating.stars}⭐|${item.rating.count}k</div>
            <div class="item_company_name">${item.company}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="item_price"> ${item.current_price}</span>
                <span class="original_price"> ${item.original_price} Rs 1199</span>
                <span class="discount_price">  ${item.discount_percentage}</span>
            </div>
           <button class="button-64" role="button"><span class="text"
            onclick="atb(${item.id}) ">ADD TO BAG</span></button> 
          </div>
 `;
});
items.innerHTML=ihtml;
}displayItemONHomePage();
 
let bagItems=[];
function atb(itemID) {
    if(!bagItems.includes(itemID))
   { bagItems.push(itemID);
    display_bag();
}
}

    function display_bag(){
        let bag_count=document.querySelector(".bag_count");
    
        if(bagItems.length>0)
    {bag_count.innerHTML=`${bagItems.length}`;}
    else {
        bag_count.style.visibility='hidden';
         bag_count.innerHTML=``;
    }
    
localStorage.setItem('bag_count',JSON.stringify(bagItems));
}
  onload();
 

