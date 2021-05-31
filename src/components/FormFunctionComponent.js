import { useRef, useState, useEffect } from "react"

export function FormFunctionComponent() {
	const [inputValue, setInputValue] = useState('')
	const inputRef = useRef()

	function handleSubmit(e) {
		alert(`The value submitted is ${inputValue}`)
		e.preventDefault()
	}

	function handleChange(e) {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		inputRef.current.focus()
	}, [])
	

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type='text' value={inputValue} onChange={handleChange} ref={inputRef}/>
			</label>
			<input type='submit' value='Submit'/>
		</form> 
	)
}