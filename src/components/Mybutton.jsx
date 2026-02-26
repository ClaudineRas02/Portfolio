export default function Mybutton({content}){
    return (
         <div className="flex gap-6">
            <button
                 className="px-5 py-2 sm:px-6 sm:py-3 bg-[#e63946] hover:bg-[#e63946] rounded-lg transition"
            >
              {content}
            </button>
  </div>
    )
}
 
