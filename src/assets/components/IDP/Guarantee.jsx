import React from "react";

import "../../CSS/Guarantee.css";
import { useEffect } from "react";
import { useState } from "react";


const Guarantee = (props) => {
	const [time,setTime]=useState(true);
	
	setInterval(()=>{
		setTime((prev)=>{
         return !prev
		})
	},10000)
	useEffect(() => {
				if(props.counter === 100) {
            callfirst();
			callSecond();
			callThird();
		}
	}, [props.counter]);


	const callfirst = () => {
		let progressStartValue = 0;
	let progressEndValue = 99;
	let speed = 100;
        let circularProgress = document.querySelector(".circular-progress");
		let progressValue = document.querySelector(".progress-value");
		let progress = setInterval(() => {
			progressStartValue++;
			progressValue.textContent = `${progressStartValue}%`
			circularProgress.style.background = `conic-gradient(#10ac84 ${progressStartValue * 3.6}deg, #151E23 0deg)`
			if (progressStartValue === progressEndValue) {
				clearInterval(progress);
			}
		}, speed);
	}

	const callSecond = () => {
		let progressStartValues = 0;
	let progressEndValues = 80;
	let speeds = 100
		let circular = document.querySelector(".circular");
		let prog = document.querySelector(".prog");
		let pro = setInterval(() => {
			progressStartValues++;
			prog.textContent = `${progressStartValues}%`
			circular.style.background = `conic-gradient(#10ac84 ${progressStartValues * 3.6}deg, #151E23 0deg)`
			if (progressStartValues == progressEndValues) {
				clearInterval(pro);
			}
		}, speeds);
	}

	const callThird = () => {
		let progressStartValuese = 0;
	let progressEndValuese = 5;
	let speedse = 100;
		let circle = document.querySelector(".circle");
		let progressor = document.querySelector(".progressor");
		let processing = setInterval(() => {
			progressStartValuese++;
			progressor.textContent = `${progressStartValuese}X`
			circle.style.background = `conic-gradient(#10ac84 ${progressStartValuese * 3.6}deg, #151E23 0deg)`
			if (progressStartValuese == progressEndValuese) {
				clearInterval(processing);
			}
		}, speedse);
	}
	
	return (
		<>
			<div className="overall">
				<h1 className="Resource-styling text-white guarantee-space above-spacings guarantee-padding">Guaranteed Business Outcomes</h1>
				<div className="row w-85 mx-auto">
					<div className="col-lg-4">
						<div className="container-circle">
							<div className="circular-progress">
								<p className="progress-value"></p>
							</div>
							<span className="text">Elevate Data Accuracy</span>
						</div></div>
					<div className="col-lg-4">
						<div className="container-circle">
							<div className="circular">
								<p className="prog"></p>
							</div>
							<span className="text">Reduce Manual Processing</span>
						</div></div>
					<div className="col-lg-4">
						<div className="container-circle">
							<div className="circle">
								<p className="progressor"></p>
							</div>
							<span className="text">Improve Productivity</span>
						</div>
					</div>
					</div>
			</div>

		</>
	);


}

export default Guarantee;