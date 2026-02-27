import { BsStars } from 'react-icons/bs';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useNavigate } from 'react-router';

export default function Favorites() {
	const navigate = useNavigate();

	const lines = ['تباوعلي وتضحك', 'انام بوجودك', 'تقرالي انجيل'];

	return (
		<main
			className='flex flex-col items-center justify-between px-6 py-10'
			style={{ minHeight: '100dvh' }}
		>
			{/* Back button */}
			<div className='w-full'>
				<button
					onClick={() => navigate('/gallery')}
					className='text-rose-400 font-medium flex items-center gap-2 text-sm active:text-rose-600'
				>
					<FaArrowLeftLong size={14} /> Back
				</button>
			</div>

			{/* Content */}
			<div className='flex flex-col items-center gap-8 w-full'>
				<BsStars className='text-rose-400' size={52} />
				<h1 className='text-2xl font-bold text-gray-800 tracking-wide'>
					My Favorites
				</h1>

				{/* Arabic poem card */}
				<div
					className='w-full max-w-sm bg-white/80 backdrop-blur-md rounded-3xl shadow-lg px-8 py-10 flex flex-col gap-6 items-center border border-rose-100'
					dir='rtl'
				>
					{lines.map((line, i) => (
						<p
							key={i}
							className='text-2xl font-semibold text-gray-700 text-center leading-relaxed'
							style={{ fontFamily: 'Amiri, Georgia, serif' }}
						>
							{line}
						</p>
					))}
					<IoMdHeartEmpty className='text-rose-300 mt-2' size={26} />
				</div>
			</div>

			<div />
		</main>
	);
}
