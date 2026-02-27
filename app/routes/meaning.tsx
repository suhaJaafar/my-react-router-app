import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaHeart, FaShieldAlt, FaUserFriends, FaHome } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { PiHeartThin, PiInfinityThin } from 'react-icons/pi';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { TfiHome } from 'react-icons/tfi';

const words = [
	{ ar: 'الحب', icon: <PiHeartThin className='text-rose-400' size={32} /> },
	{
		ar: 'الامان',
		icon: <PiInfinityThin className='text-rose-400' size={32} />,
	},
	{
		ar: 'الصداقة',
		icon: <LiaUserFriendsSolid className='text-rose-400' size={32} />,
	},
	{ ar: 'البيت', icon: <TfiHome className='text-rose-400' size={32} /> },
];

export default function Meaning() {
	const navigate = useNavigate();

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
				<MdFavorite className='text-rose-400' size={52} />
				<h1 className='text-2xl font-bold text-gray-800 tracking-wide text-center'>
					What You Mean To Me
				</h1>

				{/* Word cards grid */}
				<div className='grid grid-cols-2 gap-4 w-full max-w-sm' dir='rtl'>
					{words.map((w, i) => (
						<div
							key={i}
							className='bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-rose-100 flex flex-col items-center justify-center gap-2 py-7 px-4'
						>
							{w.icon}
							<p
								className='text-xl font-bold text-gray-700 text-center'
								style={{ fontFamily: 'Amiri, Georgia, serif' }}
							>
								{w.ar}
							</p>
						</div>
					))}
				</div>
			</div>

			<div />
		</main>
	);
}
