function Button(props) {
  const { title, changeCount } = props

 
  return (
    <button onClick={changeCount} className='mx-10 bg-blue-500 rounded-lg text-xl font-semibold text-white px-4 py-2 shadow-md'>
      {title}
    </button>

  )
  
}

export default Button;
