import React from "react";
import Title from "../Title";
export default function Contact() {
	return (
		<section className="py-5">
			<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3">
					<Title title="Contact Us"></Title>
					<form
						className="mt-5"
						action="https://formspree.io/karim2jihad@gmail.com"
						method="POST"
					>
						{/* first */}
						<div className="form-group">
							<input
								type="text"
								name="Name"
								className="form-control"
								placeholder="Karim Gehad"
							/>
						</div>
						{/* email */}
						<div className="form-group">
							<input
								type="email"
								name="email"
								className="form-control"
								placeholder="your@email.com"
							/>
						</div>
						{/* subject */}
						<div className="form-group">
							<input
								type="text"
								name="subject"
								className="form-control"
								placeholder="Subject"
							/>
						</div>
						{/* message */}
						<div className="form">
							<textarea
								name="message"
								className="form-control"
								rows="10"
								placeholder="Your Message"
							/>
						</div>
						{/* submit */}
						<div className="form-group mt-3">
							<input
								type="submit"
								name="subject"
								className="form-control bg-primary text-white"
								value="Send"
							/>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
