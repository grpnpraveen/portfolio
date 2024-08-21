import '../App.css'
import Memoji from './Memoji'
import Infocard from './Infocard'
import Media from './Media'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mail_me from '/mail_me.png'

// import classNames from 'classnames';

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any
}

function Tooltip({ text, children }) {
    return (
      <div className="relative group">
      {children}
      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 hidden w-max max-w-xs px-3 py-2 bg-gray-700 text-green-400 text-sm rounded-md group-hover:block">
        {text}
      </div>
    </div>
    );
  }
  


function Centerstage(props)
{
    return (
            <>
            <div className='flex flex-col z-10'>
              <Link to="/about">
                <div className="bubble bubble3 size-28 rounded-full text_custom hover:bg-orange-400/65 text_custom">
                  <text>&lt;WhoamI/&gt;</text>
                </div>
              </Link>

              <Link to="/experience">
                <div className="bubble bubble5 size-36 mt-44 hover:bg-yellow-400/65 rounded-full text_custom">
                <text>&lt;Experience/&gt;</text>
                </div> 
              </Link>

            </div>

            <div className='flex flex-col z-10'>

              <Link to="/projects">
                <div className="bubble size-36 mt-36 hover:bg-purple-400/65 rounded-full text_custom">
                  <text>&lt;Projects/&gt;</text>
                </div>
              </Link>

              <Link to="/skills">
                <div className="bubble size-20 mt-44 hover:bg-cyan-400/65 rounded-full text_custom">
                  <text>&lt;Skills/&gt;</text>
                </div>
              </Link>
            </div>
      
        <div id='center_stage' className={`p_centerPart z-10 flex flex-col rounded-[15px] bg-zinc-800/10 px-3 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-100/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 $w-[350px] {props.show}`}>
        {/* h-[550px] */}
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
        <div className="flex flex-col space-y-4">

          <Infocard title='EMAIL' info='grpnpraveen@gmail.com' href="mailto:grpnpraveen@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-7 items-center justify-center">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </Infocard>

          <Infocard title='PHONE' info='+1 (934) 799-1114' href='tel:+19347991114'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-7 items-center justify-center">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </Infocard>

          <Infocard title='LOCATION' info='Stony Brook, New York' href='https://maps.app.goo.gl/mz2cDRsUV8bsft9M7'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-7 items-center justify-center">
              <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </Infocard>

        </div>

      <hr className='mt-3 size-2 self-center'></hr>


        <div className="flex flex-row space-x-2 self-center p-4">

          <Media href='https://github.com/grpnpraveen'>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </Media>

          <Media href='https://www.linkedin.com/in/gali-ravi-praveen/'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
            </svg>
          </Media>

          <Tooltip text="Mail Me">
            <Media href='mailto:grpnpraveen@gmail.com'>
              <img draggable="false"  src={mail_me}></img>
            </Media>
        </Tooltip>
        

        </div>

    </div>

    <div className='flex flex-col z-10'>
     <Link to="/eca">
        <div className="bubble size-20 mt-36 hover:bg-blue-300/65 rounded-full text_custom">
          <text>&lt;ECA/&gt;</text>
        </div>
        </Link>
      <Link to="/education">
        <div className="bubble bubble3 size-36 mt-44 hover:bg-orange-400/65 rounded-full text_custom">
        <text>&lt;Education/&gt;</text>
        </div>
      </Link>
    </div>

    <div className='flex flex-col z-10'>
      <a href='mailto:grpnpraveen@gmail.com'  target='blank'>
        <div className="bubble2 size-28 hover:bg-red-400/65 rounded-full text_custom">
          <text>&lt;Mail Me/&gt;</text>
        </div>
      </a>

      <Link to="/resume">
          <div className="bubble size-36 mt-44 hover:bg-green-400/65 rounded-full text_custom">
            <text>&lt;Resume/&gt;</text>
          </div>
      </Link>
    </div>

</>
    )
}


export default Centerstage;