import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import mainBcg from "../images/mainBcg.jpeg";

// import { ProductConsumer } from "../context";
export default function HomePage() {
	return (
		<>
			<Hero title="awesome gadgets" max="true" img={mainBcg}>
				<Link to="/products" className="main-link">
					{" "}
					our products
				</Link>
			</Hero>

			<Services />
			<Featured />
		</>
	);
}
