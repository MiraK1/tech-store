import React from "react";
import {
	FaTrash,
	FaChevronCircleUp,
	FaChevronCircleDown,
} from "react-icons/fa";

export default function cartItems({ cartItem, increment, decrement, remove }) {
	const { id, title, price, count, total, image } = cartItem;
	return (
		<div className="row mt-5 mt-lg-0 text-capitalize text-center align-item-center">
			{/* img */}
			<div className="col-10 mx-auto col-lg-2 pb-2">
				<img src={image} width="60" className="img-fluid" alt="product" />
			</div>
			{/* end img */}
			{/* title */}
			<div className="col-10 mx-auto col-lg-2 pb-2">
				<span className="d-lg-none">product :</span>
				{title}
			</div>
			{/* end title */}
			<div className="col-10 mx-auto col-lg-2 pb-2">
				<span className="d-lg-none">price :</span>${price}
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<FaChevronCircleDown
					className="cursor-pointer text-primary cart-icon"
					onClick={() => decrement(id)}
				/>
				<span className="px-3">{count}</span>
				<FaChevronCircleUp
					className="cursor-pointer text-primary cart-icon"
					onClick={() => increment(id)}
				/>
			</div>
			{/* remove */}
			<div className="col-10 mx-auto col-lg-2">
				<FaTrash
					className="cursor-pointer text-danger cart-icon"
					onClick={() => remove(id)}
				/>
			</div>
			{/* total */}
			<div className="col-10 mx-auto col-lg-2">
				<strong className="text-muted">
					<span className="d-lg-none">item total :</span> ${total}
				</strong>
			</div>
		</div>
	);
}
