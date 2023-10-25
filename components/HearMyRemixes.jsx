import React from 'react';
import Image from 'next/image';
import ElectricZoo from '../public/electriczoothumnail.png';
import Butterfly01 from '../public/butterfly001.png';
import Butterfly02 from '../public/butterfly002.png';
import KnockDownCentre from '../public/knockdowncenterthumbnail.png';

function HearMyRemixes() {
	const mixes = [
		{
			name: 'Luna Mar live from Electric Zoo',
			artist: 'Luna Mar',
			link: '',
			thumbnail: ElectricZoo,
			platform: 'Soundcloud',
		},
		{
			name: 'Luna Mar live from Knockdown Center',
			artist: 'Luna Mar',
			link: '',
			thumbnail: KnockDownCentre,
			platform: 'Soundcloud',
		},
		{
			name: 'Luna Mar live from Butterfly 001',
			artist: 'Luna Mar',
			link: '',
			thumbnail: Butterfly01,
			platform: 'Soundcloud',
		},
		{
			name: 'Luna Mar live from Butterfly 002',
			artist: 'Luna Mar',
			link: '',
			thumbnail: Butterfly02,
			platform: 'Soundcloud',
		},
	];
	return (
		<div className="px-10 md:px-20 pt-40" id="music">
			<h1 className="clashSemiBold text-white text-[3rem] font-semibold">
				HEAR MY MIXES
			</h1>

			<div className="flex flex-col gap-y-6 mt-10">
				{mixes.map((mix, i) => (
					<div
						key={i}
						className="border-t-2 md:items-center py-4 border-white w-full justify-between flex flex-col md:flex-row gap-y-4"
					>
						<div className="text-white flex gap-x-6">
							<Image src={mix.thumbnail} alt={mix.name} className="h-20 w-20" />
							<div className="flex flex-col">
								<span>{mix.artist}</span>
								<span className="clashSemiBold text-xl">{mix.name}</span>
								<span className="text-[#753101]">{mix.platform}</span>
							</div>
						</div>
						<button className="text-[#773f35] px-4 py-2 border-2 border-white text-xl ">
							Listen
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default HearMyRemixes;
