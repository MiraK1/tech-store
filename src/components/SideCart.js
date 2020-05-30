import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { items } from "../context/productData";

export default function SideCart() {
	return (
		<ProductConsumer>
			{(value) => {
				const { cartOpen, closeCart, cart, cartTotal } = value;
				return (
					<CartWrapper show={cartOpen} onClick={closeCart}>
						<ul>
							{cart.map((item) => {
								return (
									<li key={item.id} className="cart-item mb-4">
										<img width="35" src={`../${item.image}`} alt="cart item" />
										<div className="mt-3">
											<h6 className="text-uppercase">{item.title}</h6>
											<h6 className="text-title text-capitalize">
												{item.count}
											</h6>
										</div>
									</li>
								);
							})}
						</ul>

						<h4 className="text-capitalize text-main">
							cart total : ${cartTotal}
						</h4>
						<div className="text-center my-5">
							<Link to="/cart" className="main-link mb-5">
								cart page
							</Link>
						</div>
					</CartWrapper>
				);
			}}
		</ProductConsumer>
	);
}

const CartWrapper = styled.nav`
	position: fixed;
	top: 60px;
	right: 0;
	width: 100%;
	height: 100%;
	background: var(--mainGrey);
	z-index: 1;
	border-left: 4px solid var(--primaryColor);
	transition: var(--mainTransition);
	transform: translateX(${(props) => (props.show ? "0" : "100%")});

	@media (min-width: 576px) {
		width: 20rem;
	}

	overflow: scroll;
	padding: 2rem;
	ul {
		padding: 0 !important;
	}
	.cart-item {
		list-style-type: none;
	}
`;
