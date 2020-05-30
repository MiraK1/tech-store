import React from "react";
import { ProductConsumer } from "../../context";
import styled from "styled-components";

export default function Filter() {
	return (
		<ProductConsumer>
			{(value) => {
				const {
					search,
					min,
					max,
					company,
					price,
					shipping,
					handleChange,
					storeProducts,
				} = value;
				let companies = new Set();
				companies.add("all");
				for (let product in storeProducts) {
					companies.add(storeProducts[product]["company"]);
				}
				companies = [...companies];
				return (
					<div className="row my-5">
						<div className="col-10 mx-auto">
							<FilterWrapper>
								<div className="">
									<label htmlFor="search">search products</label>
									<input
										type="text"
										name="search"
										id="search"
										placeholder="search by name"
										className="input-group-append"
										onChange={handleChange}
									/>
								</div>
								<div className="">
									<label htmlFor="company">company</label>
									<select
										name="company"
										id="company"
										onChange={handleChange}
										value={company}
										className="filter-item"
									>
										{companies.map((company, index) => {
											return (
												<option key={index} value={company}>
													{company}
												</option>
											);
										})}
									</select>
								</div>

								<div className="">
									<label htmlFor="price">
										<p className="mb-2">
											product price : <span>$ {price}</span>
										</p>
									</label>
									<input
										type="range"
										name="price"
										id="price"
										min={min}
										max={max}
										className="filter-price"
										value={price}
										onChange={handleChange}
									/>
								</div>

								<div className="">
									<label htmlFor="shipping">free shiping</label>
									<input
										type="checkbox"
										name="shipping"
										id="shipping"
										value={shipping}
										onChange={handleChange}
									/>
								</div>
							</FilterWrapper>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
}

const FilterWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	text-align: left;
	label {
		font-weight: bold;
		text-transform: capitalize;
	}
	input:not([type="checkbox"]),
	select {
		border: 2px solid black;
		border-radius: 6px;
		width: 100%;
	}
	input[type="checkbox"] {
		border: 2px solid black;
		margin-left: 1rem;
	}
`;
