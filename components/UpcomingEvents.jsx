import React from 'react';

function UpcomingEvents() {
	const upcomingEvents = [
		{
			date: 'Sat 22 Jul',
			time: '6:00pm GMT-4',
			name: 'The Brooklyn Mirage at Avant Gardner',
			city: 'New York',
			state: 'United State',
		},
		{
			date: 'Sat 22 Jul',
			time: '6:00pm GMT-4',
			name: 'The Brooklyn Mirage at Avant Gardner',
			city: 'New York',
			state: 'United State',
		},
		{
			date: 'Sat 22 Jul',
			time: '6:00pm GMT-4',
			name: 'The Brooklyn Mirage at Avant Gardner',
			city: 'New York',
			state: 'United State',
		},
		{
			date: 'Sat 22 Jul',
			time: '6:00pm GMT-4',
			name: 'The Brooklyn Mirage at Avant Gardner',
			city: 'New York',
			state: 'United State',
		},
	];
	return (
		<div className="px-10 md:px-20 pt-40" id="events">
			<h1 className="clashSemiBold text-white text-[3rem] font-semibold">
				UPCOMING EVENTS
			</h1>
			<div className="flex flex-col gap-y-6 mt-10">
				{upcomingEvents.map((mix, i) => (
					<div
						key={i}
						className="border-t-2 md:items-center py-4 border-white w-full justify-between flex flex-col md:flex-row gap-y-4"
					>
						<div className="text-white flex flex-col gap-y-6 md:flex-row gap-x-6 w-[70%] justify-between">
							<span className="text-xl">
								{mix.date}
								<br />
								{mix.time}
							</span>
							<span className="text-xl">{mix.name}</span>
							<span className="clashSemiBold text-xl">
								{mix.city.toUpperCase()}, <br /> {mix.state.toUpperCase()}
							</span>
						</div>
						<button className="text-white px-4 py-2 border-2 border-[#773f35] text-xl ">
							Get Ticket
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default UpcomingEvents;
