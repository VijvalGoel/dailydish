import { FC } from 'react';

const Button: FC<{
	placeholder: string;
	onSubmit?: () => void;
	type?: 'button' | 'submit' | 'reset';
}> = ({ placeholder, onSubmit, type }) => {
	return (
		<button
			formAction={onSubmit}
			className='bg-[#F6CD55] rounded-lg h-12 px-4 hover:bg-[#ffdb70]'
			type={type}
		>
			{placeholder}
		</button>
	);
};

export default Button;
