const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="./img/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Zoek Merk, Product">
                    <button class="search-btn">Zoek</button>
                </div>
                <a href="#" class="toggle-button"> 
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <a href="#" class="cart-img"><img src="img/cart.png" alt=""></a>
                <a href="signup.html" class="pf-img"><img src="img/user.png" alt=""></a>
                
             </div>
        </div>
        

        <ul class="links-container">
        <li class="link-item"><a href="./index.html" class="link">Home</a></li>
        <li class="link-item"><a href="./kabels.html" class="link">Kabels</a></li>
        <li class="link-item"><a href="./adapters.html" class="link">Adapters</a></li>
        <li class="link-item"><a href="./draadloos.html" class="link">Draadloos</a></li>
        <li class="link-item"><a href="./stekkerdozen.html" class="link">Stekkerdozen</a></li>
        </ul>
        
    `;
}

createNav();

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links-container')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
