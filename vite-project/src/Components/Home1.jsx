// Filename - Home.jsx
import React, { useState,useEffect } from "react";
import './innercomp/Home1.css'
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

const Home = () => {
	let obj1=[];
	const [proarr,setPro]=useState([]);
	const [data,setData]=useState([]);


	async function getData() {
		let res = await fetch('http://localhost:3000/dproducts')
		setPro(await res.json());
		console.log(proarr);
	}
	useEffect(()=>{
        getData()
    },[]);
	async function addto(id){
		obj1.push(...proarr.filter(x => x.id === id));
		console.log(obj1);
		for (let i = obj1.length-1; i < obj1.length; i++) {
			let res4 = await fetch('http://localhost:3000/products', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(obj1[i])
			})

	}
}
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
			<div class="prods">
				{
					proarr.map((el) => (
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
	)
};

export default Home;
