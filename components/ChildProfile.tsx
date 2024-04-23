'use client';

import Link from 'next/link';
import { FC } from 'react';

type TProps = {
	id: number;
	name: string;
	deleteAction: (id: number) => void;
	orderComplete: boolean;
};

const ChildProfile: FC<TProps> = ({
	id,
	name,
	deleteAction,
	orderComplete,
}) => {
	return (
		<div className='flex items-center justify-between py-2 border-b-2 border-gray-300'>
			<div className='flex items-center gap-4'>
				<div className='w-12 h-12 bg-black rounded-full bg-[url(https://i.pravatar.cc/48)]'></div>
				<div>{name}</div>
			</div>
			<div>
				<button
					className='bg-[#ff5454] rounded-lg h-10 px-4 mr-2 hover:bg-[#ff6363]'
					onClick={() => deleteAction(id)}
				>
					Delete Child
				</button>
				{!orderComplete && (
					<Link
						href={`/order-food/${id}`}
						className='bg-[#F6CD55] rounded-lg px-4 py-3 hover:bg-[#ffdb70]'
					>
						Order Now
					</Link>
				)}
			</div>
		</div>
	);
};

export default ChildProfile;
