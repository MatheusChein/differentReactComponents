import { useState } from "react"

export const FunctionalComponent = ({ name }) => {
	const [count, setCount] = useState(0)

	function handleClick() {
		setCount(count + 1)
	}

	return (
		<>
      <h1>I'm a functional component, my name is {name}</h1>
			<button onClick={handleClick}>Increase {count}</button>
    </>
	)
}