import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<a
				href={props.url}
				target="_blank" rel="noreferrer"
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					{/* image */}
					<div>
						<Image
							src={props.img}
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={90}
						/>
					</div>
					{/* tags */}
					<div className="text-center px-4 pt-6 flex flex-wrap gap-2 justify-center align-top text-black dark:text-white">
						{props.technologies.map((tech, i) => (
							<div key={i} className='border-2 border-black rounded-lg px-2 dark:border-white'>{tech}</div>
						)) }
					</div>
					{/* text */}
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{props.category}
						</span>
					</div>
				</div>
			</a>
		</motion.div>
	);
};

export default ProjectSingle;
