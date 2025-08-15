import btn from'./assets/Next.png'

function Button() {
  return(
    <div className='flex justify-end'>
    <button className="flex  items-center px-2 border border-black py-2 w-30 my-1 mx-5 font-semibold bg-blue-500 text-black  rounded-full">View More<img className="ml-2" src={btn} alt="btn"/></button>
    </div>
  );
} 
export default Button;