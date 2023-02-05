function ButtonAdd(props) {
    const { title, changeText } = props
  
   
    return (
      <button onClick={changeText} className='mx-10 border border-solid border-color-white rounded-lg text-xl font-semibold text-white px-4 py-2 shadow-md'>
        {title}
      </button>
  
    )
    
  }
  
  export default ButtonAdd;
  