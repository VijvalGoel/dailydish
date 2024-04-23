//@ts-ignore
const OrderItem = ({ item_name, item_price, child_name, date }) => {
	return (
		<div className='w-full p-2 mx-2 mb-4 bg-gray-300 rounded-lg'>
			<div className='flex justify-between px-4 pb-2 border-b-2 border-white font-bold'>
				{item_name}
			</div>
			<div className='px-4 pt-2'>
				<div className='w-full flex justify-between'>
					<div>Date: {date}</div>
					<div>Price: {item_price} Rupees</div>
				</div>
				<div>Child: {child_name}</div>
			</div>
		</div>
	);
};

export default OrderItem;
