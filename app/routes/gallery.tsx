import { useNavigate } from 'react-router';
import { BsImages } from 'react-icons/bs';
import { BsBalloonHeart } from 'react-icons/bs';

const sections = [
	{ id: 'favorites', title: 'My Favorites', emoji: '✨', path: '/favorites' },
	{
		id: 'meaning',
		title: 'What You Mean To Me',
		emoji: <BsBalloonHeart className='text-rose-400' />,
		path: '/meaning',
	},
	{
		id: 'memories',
		title: 'Our Memories I Like',
		emoji: <BsImages />,
		path: '/memories',
	},
];

export default function Gallery() {
	const navigate = useNavigate();

	return (
		<main
			className='flex flex-col items-center justify-between px-6 py-12'
			style={{ minHeight: '100dvh' }}
		>
			{/* Header */}
			<div className='text-center mt-4'>
				<h1 className='text-3xl font-bold text-gray-800'>For You, Baby ♡</h1>
				<p className='text-gray-400 mt-2 text-sm tracking-wide'>
					Choose a section to explore
				</p>
			</div>

			{/* Section cards */}
			<div className='flex flex-col gap-5 w-full max-w-sm flex-1 justify-center py-10'>
				{sections.map((s) => (
					<button
						key={s.id}
						onClick={() => navigate(s.path)}
						className='bg-white/80 backdrop-blur-md border border-rose-100 rounded-2xl p-6 flex flex-col items-center gap-3 text-center shadow-md active:scale-95 transition-transform duration-150'
					>
						<span className='text-5xl'>{s.emoji}</span>
						<span className='text-lg font-semibold text-gray-700'>
							{s.title}
						</span>
					</button>
				))}
			</div>

			<div className='text-gray-300 text-xs tracking-widest uppercase pb-2'>
				♡
			</div>
		</main>
	);
}
