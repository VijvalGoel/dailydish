import Button from 'components/Button';
import Input from 'components/Input';

import { Image, Link } from '@nextui-org/react';

import { login } from './actions';

const Login = () => {
	return (
		<>
			<div className='flex w-full px-24 py-6 justify-evenly'>
				<div className='w-3/4 text-lg font-bold'>DailyDish</div>
				<div className='flex w-1/4 justify-evenly'>
					<Link
						className='text-black hover:underline'
						href='/register'
					>
						Sign Up
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
				<div className='p-10 my-32 bg-white rounded-lg'>
					<div className='pb-4 text-lg font-bold text-center'>
						User Login
					</div>
					<div className='pb-8 text-center'>
						Hey, Enter your details to sign into your account
					</div>
					<form className='flex flex-col'>
						<Input
							placeholder='Enter Email'
							name='email'
							type='email'
						/>
						<Input
							placeholder='Enter Password'
							name='password'
							type='password'
						/>
						<Link className='pb-4 text-sm text-black hover:underline'>
							Have trouble signing in?
						</Link>
						<Button
							onSubmit={login}
							placeholder='Sign In'
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

export default Login;
