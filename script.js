const menu = [
    {
      id: 1,
      title: "banica",
      category: "breakfast",
      price: 5.49,
      img: "./images/banica.jpg",
      desc: `Bulgarian meal made from eggs, cheese, spinach and banitsa crusts`,
    },
    {
      id: 2,
      title: "giuveche",
      category: "lunch",
      price: 2.99,
      img: "./images/giuveche.jpg",
      desc: `Meal with bakon, eggs, tomatoes and cheese`,
    },
    {
      id: 3,
      title: "rulo 'stefani'",
      category: "dinner",
      price: 3.99,
      img: "./images/rulostefani.jpg",
      desc: `Meal with mince, carrots, eggs and cucumbers`,
    },
    {
      id: 4,
      title: "soup",
      category: "breakfast",
      price: 1.99,
      img: "./images/soup.jpg",
      desc: `Soup made from tomatoes, potatoes, carrots, peas and green bean`,
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
let descr = document.getElementById('descr');

//load the menu on window load
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();    
});

function displayMenuItems(menuItems) {
    
    let displayMenu = menuItems.map(function(item) {
      let euro = item.price * 2;
      console.log(euro)
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="menu-item">
        <div class="item-info">
            <header>
                <h3>${item.title}</h3>
                <h4 class="price">${item.price} leva / ${euro} euro</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
      if(!values.includes(item.category)) {
        //if the values array does NOT contain the chosen category
        //push the category into the values array
        values.push(item.category);
      }//if the category already exists, just return the array
      return values;
    }, ["all"]);//all will be default initial value

    const categoryBtns = categories.map(function(category) {
      return `<button class="filter-btn" 
              type="button" 
              data-id="${category}">${category}
              </button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;

    //selecting the buttons after they are added dynamicly
    const filterBtn = document.querySelectorAll('.filter-btn');
    filterBtn.forEach(function(btn) {
      btn.addEventListener('click', function(event) {
          //use dataset to add on an element an attribute with a data prefix
          const category = event.currentTarget.dataset.id;
          const menuCategory = menu.filter(function(item) {
            if(item.category === category) {
              return item;
            }    
          });
          if(category === 'all') {
            //display all category
            displayMenuItems(menu);
          } else {
            //dispaly the chosen category
            displayMenuItems(menuCategory);
          }
      })
  });
}



