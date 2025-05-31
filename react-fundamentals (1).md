Complete React Fundamentals featuring:

### 1. React Routing Basics 🛣️

#### Understanding Router Setup

// 1. Basic Router Setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

// 2. Navigation Links
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink 
                to="/menu"
                className={({ isActive }) => 
                    isActive ? "active-link" : ""
                }
            >
                Menu
            </NavLink>
        </nav>
    );
}


#### Assignment 1: Food Delivery App Routes

/*
Task: Create a food delivery app routing structure
1. Home page (/)
2. Restaurant List (/restaurants)
3. Restaurant Detail (/restaurant/:id)
4. Cart (/cart)
5. Checkout (/checkout)
*/

function App() {
    return (
        <BrowserRouter>
            <Navbar />  {/* Create this component */}
            <Routes>
                {/* Add your routes here */}
            </Routes>
            <Footer />  {/* Create this component */}
        </BrowserRouter>
    );
}

// Steps to complete:
// 1. Create basic components for each route
// 2. Implement navigation bar with Links
// 3. Add dynamic route for restaurant details
// 4. Create protected route for checkout


### 2. Props Deep Dive 🎁

#### Understanding Props Flow

// 1. Basic Props
function RestaurantCard({ name, cuisine, rating }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{cuisine}</p>
            <span>{rating} ⭐</span>
        </div>
    );
}

// 2. Props with Default Values
function MenuItem({ name, price = "Not available", isVeg = true }) {
    return (
        <div className="menu-item">
            {isVeg && <span className="veg-icon">🟢</span>}
            <h3>{name}</h3>
            <p>₹{price}</p>
        </div>
    );
}


#### Assignment 2: Restaurant Menu System

/*
Task: Create a hierarchical menu system with props
Components needed:
1. RestaurantInfo (top level)
2. MenuSection (mid level)
3. MenuItem (lowest level)
*/

// 1. Create Restaurant Info Component
function RestaurantInfo({ restaurant }) {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <MenuList categories={restaurant.menu} />
        </div>
    );
}

// 2. Create Menu Section Component
function MenuList({ categories }) {
    return (
        <div>
            {/* Map through categories */}
        </div>
    );
}

// 3. Create Menu Item Component
function MenuItem({ item }) {
    return (
        <div>
            {/* Display item details */}
        </div>
    );
}

// Test Data
const restaurantData = {
    name: "Paradise Biryani",
    rating: 4.5,
    menu: [
        {
            category: "Starters",
            items: [
                { id: 1, name: "Chicken 65", price: 250 }
            ]
        }
    ]
};


### 3. Event Handling in Detail 🖱️

#### Understanding Events

// 1. Click Events
function AddToCartButton({ item }) {
    const handleClick = (e) => {
        console.log('Event type:', e.type);
        console.log('Target:', e.target);
        console.log('Item:', item);
    };

    return (
        <button onClick={handleClick}>
            Add to Cart
        </button>
    );
}

// 2. Form Events
function SearchBar() {
    const handleChange = (e) => {
        console.log('Value:', e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle search
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={handleChange}
                placeholder="Search for food..."
            />
        </form>
    );
}


#### Assignment 3: Interactive Menu System

/*
Task: Create an interactive menu with:
1. Search functionality
2. Filter options
3. Sort capabilities
4. Add to cart functionality
*/

function MenuSystem({ items }) {
    // Add your event handlers here
    const handleSearch = (e) => {
        // Implement search
    };

    const handleFilter = (type) => {
        // Implement filter
    };

    const handleSort = (criteria) => {
        // Implement sort
    };

    return (
        <div className="menu-system">
            <div className="controls">
                <input 
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search items..."
                />
                <select onChange={(e) => handleSort(e.target.value)}>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            <div className="items">
                {/* Render filtered and sorted items */}
            </div>
        </div>
    );
}


### 4. Building Complete UI 🎨

#### Assignment 4: Restaurant Page

/*
Task: Create a complete restaurant page with:
1. Header with navigation
2. Restaurant info section
3. Menu categories
4. Interactive menu items
5. Cart summary
*/

// 1. Main Layout Component
function RestaurantPage() {
    return (
        <div className="restaurant-page">
            <Header />
            <RestaurantInfo />
            <MenuSystem />
            <CartSummary />
        </div>
    );
}

// 2. Create these components:
function Header() {
    return (
        // Navigation, search, cart icon
    );
}

function RestaurantInfo() {
    return (
        // Restaurant details, ratings, timing
    );
}

function MenuSystem() {
    return (
        // Categories, items, add to cart
    );
}

function CartSummary() {
    return (
        // Cart items, total, checkout button
    );
}


### Final Project: Food Delivery App


/*
Complete Food Delivery App featuring:
1. Restaurant listing
2. Menu browsing
3. Cart management
4. Checkout process
*/

// File structure:
src/
  components/
    common/
      Button.js
      Card.js
      Input.js
    layout/
      Header.js
      Footer.js
    restaurants/
      RestaurantCard.js
      MenuList.js
      MenuItem.js
    cart/
      CartItem.js
      CartSummary.js
  pages/
    Home.js
    RestaurantList.js
    RestaurantDetail.js
    Cart.js
    Checkout.js
  routes/
    index.js
  styles/
    main.css


### Success Tips 🌟

1. **Routing Best Practices:**
   - Keep routes organized
   - Use lazy loading for large apps
   - Implement proper navigation
   - Handle 404 routes

2. **Props Management:**
   - Use prop-types
   - Keep props simple
   - Document props
   - Use default values

3. **Event Handling:**
   - Debounce search inputs
   - Prevent default when needed
   - Use event delegation
   - Clean up event listeners

4. **UI Development:**
   - Mobile-first approach
   - Consistent styling
   - Component reusability
   - Error boundaries

Remember:
- Test all routes
- Validate props
- Handle edge cases
- Keep components small
- Use meaningful names