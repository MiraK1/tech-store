import React from "react";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Products from "../components/ProductsPage/Products";
import productsBcg from "../images/productsBcg.jpeg";

export default function ProductsPage() {
	return (
		<>
			<Hero img={productsBcg} />
			<Products />
		</>
	);
}
