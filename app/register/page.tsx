import Button from 'components/Button';
import Input from 'components/Input';

import { Image, Link } from '@nextui-org/react';

import { signup } from './actions';

const Register = () => {
	return (
		<>
			<div className='flex w-full px-24 py-6 justify-evenly'>
				<div className='w-3/4 text-lg font-bold'>DailyDish</div>
				<div className='flex w-1/4 justify-evenly'>
					<Link className='text-black hover:underline' href='/login'>
						Sign In
					</Link>
					<button className='bg-[#F6CD55] rounded-lg h-12 px-4'>
						Talk with us!
					</button>
				</div>
			</div>
			<div className='flex justify-evenly'>
				<div>
					<Image
						src='./login-img.svg'
						alt='Girl eating food'
						width={560}
					/>
				</div>
				<div className='p-10 my-24 bg-white rounded-lg'>
					<div className='pb-2 text-lg font-bold text-center'>
						User Registration
					</div>
					<div className='pb-6 text-center'>
						Hey, Enter your details to create your account
					</div>
					<form className='flex flex-col'>
						<Input
							placeholder='Enter Name'
							name='name'
							type='string'
						/>
						<Input
							placeholder='Enter Email'
							name='email'
							type='email'
						/>
						<Input
							placeholder='Enter Password'
							type='password'
							name='password'
						/>
						<Input
							placeholder='Enter Confirm Password'
							type='password'
							name='confirm-password'
						/>
						<Button
							onSubmit={signup}
							placeholder='Sign Up'
							type='submit'
						/>
					</form>
				</div>
			</div>
			<div className='w-full font-bold text-center'>
				©2024 Daily Dish.| Privacy Policy
			</div>
		</>
	);
};

export default Register;
