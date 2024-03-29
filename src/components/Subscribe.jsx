import React from "react";

const Subscribe = () => {
	return (
		<div
			className='w-full px-4 py-16 text-black text-center bg-white'
			id='About'
		>
			<h1>Join Our DeFi Community</h1>
			<div className='py-4'>
				<input
					className='p-3 rounded-xl mr-4 border-2 border-blue-500'
					type='email'
					placeholder='Enter your email'
				/>
				<button>Sign Up</button>
			</div>
			<div className='flex items-center justify-center py-2 '>
				<input className='mr-2 ' type='checkbox' />
				<p>Yes, I agree to receive email communications from DeFi.</p>
			</div>
		</div>
	);
};

export default Subscribe;
