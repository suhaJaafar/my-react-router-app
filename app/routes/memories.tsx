import { BsImages } from 'react-icons/bs';
import { FaMusic, FaBookOpen, FaTv, FaHeart, FaEye } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useNavigate } from 'react-router';

const memories = [
	{
		icon: <FaMusic className='text-rose-400' size={28} />,
		text: 'من شرحتلي اغنية شمسية',
	},
	{
		icon: <FaBookOpen className='text-rose-400' size={28} />,
		text: 'من قريتلي انجيل واحنا متزاعلين',
	},
	{
		icon: <FaTv className='text-rose-400' size={28} />,
		text: 'من جنة نباوع مسلسل سوة\nوكتلي لو بس اعرف شمستفادة وانت تباوعيلي هيج',
	},
	{
		icon: <FaHeart className='text-rose-400' size={28} />,
		text: 'من بجيت علية لان حسيت صدك تحبني',
	},
	{
		icon: <FaEye className='text-rose-400' size={28} />,
		text: 'من كتلي اني ماعندي صورة الج بس وجهج وانت تباوعيلي وعيونج تضحكلي محد يكدر يمحيه من ذاكرتي',
	},
];

export default function Memories() {
	const navigate = useNavigate();

	return (
		<main className='flex flex-col px-5 py-10' style={{ minHeight: '100dvh' }}>
			{/* Back button */}
			<button
				onClick={() => navigate('/gallery')}
				className='text-rose-400 font-medium flex items-center gap-1 text-sm active:text-rose-600 mb-8'
			>
				← Back
			</button>

			{/* Header */}
			<div className='flex flex-col items-center gap-3 mb-8'>
				<span className='text-6xl'>
					<BsImages />
				</span>
				<h1 className='text-2xl font-bold text-gray-800 tracking-wide text-center'>
					Our Memories I Like
				</h1>
			</div>

			{/* Memory cards */}
			<div
				className='flex flex-col gap-5 w-full max-w-sm mx-auto pb-8'
				dir='rtl'
			>
				{memories.map((m, i) => (
					<div
						key={i}
						className='bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-rose-100 px-6 py-6 flex flex-col gap-3'
					>
						<span>{m.icon}</span>
						<p
							className='text-lg text-gray-700 leading-relaxed whitespace-pre-line'
							style={{ fontFamily: 'Amiri, Georgia, serif' }}
						>
							{m.text}
						</p>
					</div>
				))}

				{/* Closing heart */}
				<div className='flex justify-center mt-2'>
					<IoMdHeartEmpty className='text-rose-300' size={28} />
				</div>
			</div>
		</main>
	);
}
