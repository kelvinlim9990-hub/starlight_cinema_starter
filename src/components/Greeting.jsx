function Greeting({ name }) {
  return (
    <p className="greeting">
      {console.log('name', name)}
      Welcome back, <strong>{name.split(' ')[0]}</strong>!
    </p>
  )
}

export default Greeting
