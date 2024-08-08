import './App.css'
import Face from './assets/face_icon.png'
import Memoji from './Memoji'

function App() {


  return (
    <>

      <div className="p_centerPart flex flex-col rounded-[15px] bg-white/10 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-100/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 h-[550px] w-[300px]">

        <div className="flex flex-row self-center items-center rounded-[20px] bg-gradient-to-r from-[#374151] to-[#111827] mt-5 size-36 shadow-xl hover:shadow-sm">
          {/* <img src={Face} className="justify-center item-center size-30"/> */}
          <Memoji/>
        </div>

        <h2 className=" font-semibold from-neutral-50 text-2xl mt-4">Ravi Praveen Gali</h2>
        <div className="items-center rounded-md bg-slate-700 w-40 mt-3 p-1 ms-[21%]">
          Software Engineer
        </div>

        <hr className="flex self-center mt-6 h-px my-8 bg-gray-200 border-0 dark:bg-zinc-400 size-52"></hr>
        
        {/* Detail */}

        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center rounded-[10px] bg-slate-700 size-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-7 items-center justify-center">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
          </div>

          <div className="flex flex-col ms-5">
            <div className="text-start text-gray-400">EMAIL</div>
            <div className="">grpnpraveen@gmail.com</div>
          </div>
        </div>


        <div className="flex flex-row mt-8">
          <div className="flex flex-col justify-center items-center rounded-[10px] bg-slate-700 size-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-7 items-center justify-center">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
          </div>
          <div className="flex flex-col ms-5">
            <div className="text-start text-gray-400">PHONE</div>
            <div className="">+1 (934) 799-1114</div>
          </div>
        </div>

        <div className="flex flex-row mt-8">
          <div className="flex flex-col justify-center items-center rounded-[10px] bg-slate-700 size-12">
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-7 items-center justify-center">
              <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />

              </svg>
          </div>
          <div className="flex flex-col ms-5">
            <div className="text-start text-gray-400">LOCATION</div>
            <div className="">Stony Brook, New York, USA</div>
          </div>   
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
        </div>



      </div>

 
    </>
  )
}

export default App