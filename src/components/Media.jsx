import '../App.css'
import PropTypes from 'prop-types';


Media.propTypes = {
    href: PropTypes.string,
    children: PropTypes.any
  }

function Media(props)
{
    // const absoluteHref = props.href && (props.href.startsWith('http://') || props.href.startsWith('https://'));

    return (
        <a href={props.href} target='blank'>
           <div className="flex flex-col justify-center items-center rounded-[10px] bg-slate-700 size-12">
                {props.children}
           </div>

        </a>
    );
}


export default Media;