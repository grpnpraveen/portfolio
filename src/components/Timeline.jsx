import '../App.css'
import PropTypes from 'prop-types';


Timeline.propTypes = {
    time: PropTypes.string.isRequired, //February 2022
    title: PropTypes.string.isRequired,
    subhead: PropTypes.string.isRequired, 
    info: PropTypes.string.isRequired, 
    href: PropTypes.string,
    badges: PropTypes.string,
    color_to: PropTypes.string.isRequired,
}

function Timeline(props)
{
    // console.log(props.badges===undefined)
    var badges_list;
    if(props.badges != undefined)
    {

     badges_list = props.badges.split('|').filter(sentence => sentence.trim() !== '');
        // alert(badges_list);
    }

    const infoSentences = props.info.split('•').filter(sentence => sentence.trim() !== '');

    console.log(infoSentences);
    console.log(badges_list);
   

    return (

        <ol className={`relative border-s border-gray-400 ${props.color_to}`}>                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
                <time className="mb-1 text-sm font-light leading-none text-gray-200">{props.time}</time>

                <h3 className={`text-lg font-semibold ${props.color_to}`}>{props.title}</h3>

                <h2 className="text-lg font-semibold text-gray-500 italic">{props.subhead}</h2>

                <p className="mb-4 text-lg font-normal text-gray-300 w-[60%] text-left">

                {infoSentences.map((sentence, index) => (
                        <span key={index}>
                            <br></br>
                            • {sentence.trim()}
                            {/* {index < infoSentences.length - 1 && ' • '} */}
                        </span>
                    ))}

                </p>

                {props.href && (
                    <a href={props.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium   border rounded-lg  bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700">
                        more 
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                )}

               {props.badges && (
    <div className="flex flex-wrap">
        {badges_list.map((val, index) => (
            <span 
                className="bg-white text-black font-medium text-xs me-2 px-2.5 py-0.5 rounded-full mb-2" 
                style={{ maxWidth: '10.66%' }} 
                key={index}
            >
                {val.trim()}
            </span>
        ))}
    </div>
)}




            </li>
         </ol>

    );
}


export default Timeline;