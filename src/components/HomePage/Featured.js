import React from "react";
import { ProductConsumer } from "../../context";
import Product from "../Product";
import Title from "../Title";
import { Link } from "react-router-dom";
// import styled from "styled-components";

export default function Featured() {
	return (
		<section className="py-5">
			<div className="container">
				<Title title="featured products" center="true" />
				<div className="row my-5">
					<ProductConsumer className="">
						{(value) => {
							const { featuredProducts } = value;
							return featuredProducts.map((product) => (
								<Product key={product.id} product={product}></Product>
							));
						}}
					</ProductConsumer>
				</div>
				<div className="rox mt-5">
					<div className="col text-center">
						<Link to="/products" className="main-link">
							{" "}
							our products
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
