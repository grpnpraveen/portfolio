import '../App.css'
import PropTypes from 'prop-types';


SkillCard.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired, 
    href: PropTypes.string,
}

function SkillCard(props)
{
    // const absoluteHref = props.href && (props.href.startsWith('http://') || props.href.startsWith('https://'));
    return (
        <div className="max-w-48 flex flex-col items-center  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="size-10" src={props.href}/>
                
            <a href={props.href}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.info}</p>
        </div>
    );
}


export default SkillCard;