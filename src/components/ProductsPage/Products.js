import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
// import styled from "styled-components";
import Product from "../Product";
import Filter from "./Filter";

export default function Products() {
	return (
		<>
			<ProductConsumer>
				{(value) => {
					const { filteredProducts } = value;
					return (
						<section className="py-5">
							<div className="container">
								<Title center title="our Products"></Title>
								<Filter />
								<div className="row">
									<div className="col-10 mx-auto">
										<h6 className="text-title">
											total products : {filteredProducts.length}
										</h6>
									</div>
								</div>
								<div className="row py-5">
									{filteredProducts.length === 0 ? (
										<div className="col text-title text-center">
											<h6 className="text-title">
												sorry no item matched your search
											</h6>
										</div>
									) : (
										filteredProducts.map((item) => {
											return <Product id={item.id} product={item} />;
										})
									)}
								</div>
							</div>
						</section>
					);
				}}
			</ProductConsumer>
		</>
	);
}
