import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DEC from "../assets/DEC.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='w-full h-[90px] bg-black' id='Navbar'>
			<div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
				<div className='w-32'>
					<img src={DEC} alt='logo' />
				</div>
				<div className='hidden md:flex'>
					<ul className='flex text-white items-center hover:cursor-pointer'>
						<li className='hover:text-red-500 hover:underline'>
							<Link spy={true} to='Navbar'>
								HEADER
							</Link>
						</li>
						<li className='hover:text-red-500 hover:underline'>
							<Link spy={true} to='Community'>
								About
							</Link>
						</li>

						<li className='hover:text-red-500 hover:underline'>
							<Link spy={true} to='Developers'>
								Developers
							</Link>
						</li>
						<li className='hover:text-red-500 hover:underline'>
							<Link spy={true} to='About'>
								Community
							</Link>
						</li>

						<button className='ml-4'>Use Defi</button>
					</ul>
				</div>

				{/* Hamburger menu */}
				<div onClick={handleNav} className='block md:hidden'>
					{nav ? (
						<AiOutlineClose size={30} className='text-white' />
					) : (
						<AiOutlineMenu size={30} className='text-white' />
					)}
				</div>

				{/* Mobile Menu */}
				<div
					className={
						nav
							? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
							: "absolute left-[-100%]"
					}
				>
					<ul>
						<li className='text-2xl'>
							<Link spy={true} to='Navbar'>
								Platform
							</Link>
						</li>
						<li className='text-2xl'>
							<Link spy={true} to='Community'>
								Community
							</Link>
						</li>
						<li className='text-2xl'>
							<Link spy={true} to='Developers'>
								Developers
							</Link>
						</li>

						<li className='text-2xl'>
							<Link spy={true} to='About'>
								About
							</Link>
						</li>
						<button className='m-8'>Use Defi</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
