function Greeting({ name }) {
  return (
    <p className="greeting">
      Welcome back, <strong>{name.split(' ')[0]}</strong>!
    </p>
  )
}

export default Greeting
