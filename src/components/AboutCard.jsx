import React from "react";

const AboutCard = (props) => {
	return (
		<div className='flex flex-col text-left rounded-xl border-2 border-blue-500 py-12 px-8'>
			<div>
				<div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
					{props.icon}
				</div>
				<h3 className='text-xl font-bold py-4'>{props.heading}</h3>
				<p className='text-justify'>{props.text}</p>
			</div>
		</div>
	);
};

export default AboutCard;
