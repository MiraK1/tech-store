import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3">
						<img
							src={aboutBcg}
							alt="about company"
							className="img-fluid img-thumbnail"
							style={{ background: "var(--darkGrey)" }}
						/>
					</div>
					<div className="col-10 mx-auto col-md-6 my-3">
						<Title title="about us" />
						<p className="text-lead text-muted my-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
							aut unde expedita ullam quam dolore adipisci error blanditiis
							doloribus quasi?
						</p>
						<p className="text-lead text-muted my-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Distinctio magni expedita consequatur deleniti animi suscipit.
						</p>
						<button
							className="main-link"
							type="button"
							style={{ marginTop: "2rem" }}
						>
							More info
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
