import React from "react";
import { FiX } from "react-icons/fi";

function ModalSetting({
	pomodoroRef,
	shortBreakRef,
	longBreakRef,
	openSetting,
	setOpenSetting,
	updateTimeDefaultValue,
}) {
	const inputs = [
		{
			value: "Pomodoro",
			ref: pomodoroRef,
			defaultValue: 25,
		},
		{
			value: "Short Break",
			ref: shortBreakRef,
			defaultValue: 5,
		},
		{
			value: "Long Break",
			ref: longBreakRef,
			defaultValue: 10,
		},
	];

	return (
		<>
			<div
				className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-40 transition-allw duration-600 ${
					openSetting ? "" : "hidden"
				}`}
				onClick={() => setOpenSetting(false)}
			></div>
			<div
				className={`max-w-xl bg-slate-800 absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-3xl ${
					openSetting ? "" : "hidden"
				}`}
				style={{
					transform: "translate(-50%,-50%)",
				}}
			>
				<div className="text-orange-600 flex justify-between items-center">
					<h1 className="uppercase font-bold tracking-wider">Settings</h1>
					<FiX
						className="text-2xl cursor-pointer"
						onClick={() => setOpenSetting(false)}
					/>
				</div>
				<div className="h-1 w-full bg-gray-200 mt-5 mb-5"></div>
				<div className="flex gap-5">
					{inputs.map((input, index) => {
						return (
							<div key={index}>
								<h1 className="text-gray-100 text-sm">{input.value}</h1>
								<input
									defaultValue={input.defaultValue}
									type="number"
									className="w-full bg-slate-500 bg-opacity-30 py-2 rounded outline-none text-center"
									ref={input.ref}
								/>
							</div>
						);
					})}
				</div>
				<button
					className="bg-orange-600 uppercase w-full mt-5 text-white rounded py-2"
					onClick={updateTimeDefaultValue}
				>
					Save
				</button>
			</div>
		</>
	);
}

export default React.memo(ModalSetting);
