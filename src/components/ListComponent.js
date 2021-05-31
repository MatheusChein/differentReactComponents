export function List() {
  const person = {
    name: 'Chris',
    twitter: 'chrisoncode',
    bio: 'The dude at scotch.io'
  };

  return (
    <div>
      {Object.keys(person).map((keyName, index) => (
        <p key={index}>
					<strong>{keyName.charAt(0).toUpperCase() + keyName.slice(1)}: </strong>
					{person[keyName]}
				</p>
      ))}
    </div>
  );
}