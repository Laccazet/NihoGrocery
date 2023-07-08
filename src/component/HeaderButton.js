import { Link } from 'react-router-dom'

export default function HeaderButton( {text, path} ) {
  return (
    <Link to={path}>
        <div>
            <h1>{text}</h1>
        </div>
    </Link>
  )
}
