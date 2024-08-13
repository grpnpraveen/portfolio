import '../App.css'
import PropTypes from 'prop-types';


Infocard.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired, 
    href: PropTypes.string,
    children: PropTypes.any
  }

function Infocard(props)
{
    // const absoluteHref = props.href && (props.href.startsWith('http://') || props.href.startsWith('https://'));

    return (
        <a href={props.href} target='blank'>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center rounded-[10px] bg-slate-700 size-12">
                {props.children}
                </div>

                <div className="flex flex-col ms-5">
                <div className="text-start text-gray-400">{props.title}</div>
                <div>{props.info}</div>
                </div>
            </div>
        </a>
    );
}


export default Infocard;