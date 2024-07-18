import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const Cart = () => {
    const [cart,setCart]= useState([]);
    async function rproducts(){
        let res = await fetch('http://localhost:3000/products')
		setCart(await res.json());
		console.log(cart);
	}
    useEffect(()=>{
        getData()
    },[]);
    return (
        <>
        <div class="nav">
				<ul class="nav">
				<div>
						{/* Endpoint to route to Home component */}
						<Link to="/">Home</Link>
						</div>
						<div>
						{/* Endpoint to route to Contact Us component */}
						<Link to="/cart">Cart</Link>
						</div>
					<div>
						{/* Endpoint to route to Contact Us component */}
						<Link to="/elog">Login</Link>
						</div>
					<div>
						{/* Endpoint to route to Contact Us component */}
						<Link to="/nlog">Sign-Up</Link>
						</div>
				</ul>
			</div>
            <div class="cprods">
				{
					obj1.map((el) => (
						<div class="tdli">
							<h1>{el.title}</h1>
							<h3>{el.description}</h3>
							<h3>{el.price}</h3>
							<img class="proima"src={el.image} alt="Logo" />
							<div class="cbut">
								<button onClick={()=>addto(el.id)}>Add To Cart</button>
							</div>


						</div>
					))
				}

			</div>
        </>
    );
};
 
export default Cart;