import { Link } from 'react-router-dom'

export default function HeaderButton( {text, path, font, textSize, textColor} ) {
  return (
    <Link to={path}>
        <div>
            <h1 
            style={{fontFamily: `${font}`, fontSize: `${textSize}`, color: `${textColor}`}}>
            {text}
            </h1>
        </div>
    </Link>
  )
}
