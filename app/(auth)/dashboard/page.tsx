import Button from 'components/Button';
import ChildProfile from 'components/ChildProfile';
import OrderItem from 'components/OrderItem';
import { createServerClient } from 'lib/supabase';
import Link from 'next/link';
import React from 'react';

import { signout } from '../action';
import { deleteChild, getChildrenList, getOrderList } from './action';

const Dashboard = async () => {
	const supabase = createServerClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const childrenList = await getChildrenList();
	const orderList = await getOrderList();

	return (
		<>
			<div className='p-8'>
				<div className='w-full p-4 mb-2 bg-white rounded-lg'>
					<div className='flex items-center justify-between mb-4'>
						<div className='flex items-center w-5/6 gap-4 pl-8'>
							<div className='w-12 h-12 bg-black rounded-full bg-[url("https://i.pravatar.cc/48")]'></div>
							<div>
								Welcome Back,{' '}
								{user?.user_metadata.name ?? 'Unknown User'}!
							</div>
						</div>
						<div className='flex items-center justify-center w-1/6 gap-4 flex-evenly'>
							<div>Money</div>
							<div className='h-8 border-r-2 border-gray-400'></div>
							<form>
								<Button
									onSubmit={signout}
									placeholder='Log Out'
									type='submit'
								/>
							</form>
						</div>
					</div>
					<hr />
					<div className='flex w-full p-8 justify-evenly'>
						<div className='w-1/2 py-6 pr-8 border-r-2 border-gray-500'>
							<div className='flex items-center justify-between mb-6'>
								<div className='text-2xl font-bold'>
									My Children
								</div>
								<Link
									href='add-child'
									className='bg-[#F6CD55] rounded-lg h-12 px-4 hover:bg-[#ffdb70] flex items-center'
								>
									Add Child
								</Link>
							</div>
							<div>
								{childrenList?.length !== 0 &&
									childrenList?.map((child, i) => (
										<ChildProfile
											key={i}
											name={child.name}
											id={child.id}
											deleteAction={deleteChild}
											orderComplete={child.order_complete}
										/>
									))}

								{childrenList?.length === 0 && (
									<p>You haven't added any children yet</p>
								)}
							</div>
						</div>
						<div className='w-1/2 pl-8'>
							<div className='py-6 text-2xl font-bold text-center'>
								Order History
							</div>
							{orderList?.length !== 0 &&
								orderList?.map((order: any, i: any) => (
									<OrderItem
										key={i}
										item_name={order.item}
										item_price={order.price}
										child_name={order.child_name}
										date={new Date(
											order.created_at
										).toISOString().split('T')[0]}
									/>
								))}

							{orderList?.length === 0 && (
								<p>You haven't ordered anything yet</p>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-between px-12 font-bold'>
				<div>DailyDish</div>
				<div>©2024 Daily Dish.| Privacy Policy</div>
			</div>
		</>
	);
};

export default Dashboard;
