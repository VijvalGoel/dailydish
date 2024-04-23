//@ts-ignore
const Input = ({ placeholder, type, name }) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			name={name}
			className='p-2 mb-4 border border-gray-200 rounded-lg'
		/>
	);
};

export default Input;
