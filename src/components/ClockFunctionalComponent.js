import { useEffect, useState } from "react"

export function ClockFunctionalComponent() {
	const [date, setDate] = useState(new Date())

	function timer() {
		setDate(new Date());
	}

	useEffect(() => {
		setInterval(timer, 1000);
	}, []) 

	return (
		<>
			<h1>Hello Functional Clock</h1>
			<h2>It is {date.toLocaleTimeString()}</h2>
		</>
	)
}