import React from "react";
import { FiBellOff } from "react-icons/fi";

export default function Timer({
	stage,
	switchStage,
	getTickingTime,
	seconds,
	ticking,
	startTimer,
	isTimeUp,
	muteAlarm,
	reset,
}) {
	const options = ["Pomodoro", "Short Break", "Long Break"];
	return (
		<div className="w-10/12 mx-auto py-20 text-orange-600 flex flex-col justify-center items-center mt-20 bg-slate-800 rounded-full">
			<div className="flex gap-5 items-center text-gray-600">
				{options.map((option, index) => {
					return (
						<h1
							key={index}
							className={` ${
								index === stage ? "bg-gray-500 text-orange-600 bg-opacity-30" : ""
							} p-1 cursor-pointer transition-all rounded`}
							onClick={() => switchStage(index)}
						>
							{option}
						</h1>
					);
				})}
			</div>
			<div className="mt-10 mb-10">
				<h1 className="text-8xl font-bold select-none m-0">
					{getTickingTime()}:{seconds.toString().padStart(2, "0")}
				</h1>
			</div>
			<div className="flex gap-2 items-center">
				<button
					className="px-8 py-2 text-2xl rounded-3xl bg-gray-900 text-white uppercase font-bold hover:bg-gray-300 transition-colors duration-300"
					onClick={startTimer}
				>
					{ticking ? "Stop" : "Start"}
				</button>
				{isTimeUp && (
					<FiBellOff
						className="text-3xl text-white cursor-pointer"
						onClick={muteAlarm}
					/>
				)}
				<button className="px-8 py-2 text-2xl rounded-3xl bg-gray-900 text-white uppercase font-bold hover:bg-gray-300 transition-colors duration-300" onClick={reset}>
					Reset
				</button>
			</div>
			<div className="py-2 align items-center">
				
			</div>
		</div>
	);
}
