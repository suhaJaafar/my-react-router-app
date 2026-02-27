import { useState } from 'react';
import { useNavigate } from 'react-router';

const STATIC_PASSWORD = 'mylove'; // Change this to your desired password

export function Welcome() {
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password === STATIC_PASSWORD) {
			navigate('/gallery');
		} else {
			setError('Incorrect password, try again ♡');
		}
	};

	return (
		<main
			className='flex flex-col items-center justify-between px-6 py-10'
			style={{ minHeight: '100dvh' }}
		>
			{/* Birthday Text */}
			<div className='text-center pt-6'>
				<h1 className='text-4xl font-bold text-gray-800 leading-tight'>
					Happy Birthday
				</h1>
				<span className='text-4xl font-bold text-rose-400 block mt-1'>
					beeeeb 🎂
				</span>
			</div>

			{/* Password Form */}
			<form
				onSubmit={handleSubmit}
				className='flex flex-col items-center gap-4 w-full max-w-sm'
			>
				<label className='text-gray-500 font-semibold text-base tracking-wide'>
					Enter Password
				</label>
				<input
					type='password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
						setError('');
					}}
					placeholder='Enter password...'
					className='border-2 border-rose-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-rose-400 text-center text-gray-700 text-base bg-white/80 backdrop-blur-sm shadow-sm placeholder:text-gray-300'
					autoComplete='current-password'
				/>
				{error && <p className='text-red-400 text-sm text-center'>{error}</p>}
				<button
					type='submit'
					className='bg-rose-400 active:bg-rose-500 text-white font-bold px-8 py-3 rounded-xl w-full text-base shadow-md transition-colors duration-150'
				>
					Enter ♡
				</button>
			</form>

			{/* Image */}
			<div className='w-full flex justify-center py-6'>
				<img
					src='/home_pass_img.jpeg'
					alt='For You Baby'
					className='w-full max-w-xs rounded-2xl shadow-2xl rotate-1'
					style={{ filter: 'drop-shadow(0 8px 28px rgba(251,113,133,0.35))' }}
				/>
			</div>
		</main>
	);
}
