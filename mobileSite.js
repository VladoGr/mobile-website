const checkbox = document.querySelectorAll('.filter-option');
const mobileCard = document.querySelector('.mobile-card')

let mobile = [
    {
        brand: 'Apple',
        model:'Iphone 14',
        price: '543',
        operationSistem: 'IOS',
        networkSpeed: '5G',
        batterryCapacity: '5200Ah',
        displayResolution: '6,1',
        image: './mobile_site_photo/Apple-iPhone-11.jpeg',
    },

    {
        brand: 'Samsung',
        model: 'Samsung Galaxy s22',
        price: '612',
        operationSistem: 'Android',
        networkSpeed: '4G',
        batterryCapacity: '5400Ah',
        displayResolution: '6,4',
        image: './mobile_site_photo/Samsung-galaxy-A12.jpeg',
    }, 
    {
        brand: 'Motorola',
        model: 'Motorola g20',
        price: '389',
        operationSistem: 'Android',
        networkSpeed: '5G',
        batterryCapacity: '5200Ah',
        displayResolution: '6,5',
        image: './mobile_site_photo/Motorola-e7.jpeg',
    },
    {
        brand: 'Huawei',
        model: 'Huawei P50 PRO',
        price: '1000',
        operationSistem: 'Android',
        networkSpeed: '5G',
        batterryCapacity: '5200Ah',
        displayResolution: '6,5',
        image: './mobile_site_photo/Huawei_ p50_pro.jpeg',
    },
    {
        brand: 'Sony',
        model: 'Sony Xperia 10 IV',
        price: '1200',
        operationSistem: 'Android',
        networkSpeed: '5G',
        batterryCapacity: '4900Ah',
        displayResolution: '6,7',
        image: './mobile_site_photo/sony_xperia_10_IV.jpeg',
    }
]

window.addEventListener('DOMContentLoaded', ()=> {
    displayMobile(mobile);
})

const displayMobile = (arg) => {
    let displayItem = arg.map(e => {
        return `<article class="card">
        <figure>
            <img src="${e.image}" alt="image no found">
        </figure>
        <div class="card-text">
            <h1 class="card-title">${e.model}</h1>
            <h1 class="card-price">${e.price} \u20AC</h1>
            <p class="card-text">${e.operationSistem}, ${e.networkSpeed}, ${e.batterryCapacity}, ${e.displayResolution}</p>
        </div>
    </article>`
    })

    displayItem = displayItem.join('')
    mobileCard.innerHTML = displayItem;
    
}


    checkbox.forEach(event => {
        event.addEventListener('change', e => {
            e.preventDefault()
            let item = e.currentTarget.value;
            let filterItem = mobile.filter(arr => {
                if(arr.brand === item || arr.operationSistem === item || arr.networkSpeed === item) {
                    return arr;
                };
            })

            if(event.checked === true) {
                displayMobile(filterItem);
            } else {
                displayMobile(mobile)
            }
            

        })
    
    })