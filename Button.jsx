
import btn from'./assets/view/Next.png'

function Button() {
  return(
    <button className="flex items-center px-2 border border-black py-2 w-30 m-5 font-semibold bg-blue-500 text-black rounded-full">View More<img className="ml-2" src={btn} alt="btn"/></button>
  );
} 
export default Button;