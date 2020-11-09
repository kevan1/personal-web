import React from 'react';

const About = ({ name }) => {
	return (
		<section className="about" id="about">
			<h3>
				Hi! I'm {name} <i className="animated hover-rotate em em-raised_hand_with_fingers_splayed" />
			</h3>
			<div className="details">
				<div className="item text-muted">
					<p>
						I'm a Dev Ops from Argetina <i className="animated hover-bounce em-svg em-heart f-12" />
						I'm good at Docker & Minecraft. I can create projects. If you have any work feel
						free to contact.
					</p>

				</div>
			</div>
		</section>
	);
};

export { About };
