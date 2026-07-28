import React from 'react'
import {Link} from 'react-router-dom'
import { ROUTES } from '../../src/app/routes';

const Sidebar = () => {
  return (
   <aside>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Dashboard</Link>
      </li>

       <li>
        <Link to={ROUTES.JSON_FORMATTER}>JSON Formatter</Link>
      </li>

       <li>
        <Link to={ROUTES.REGEX_TESTER}>Regex Tester</Link>
      </li>

       <li>
        <Link to={ROUTES.JWT_DECODER}>JWT Decoder</Link>
      </li>
    </ul>
   </aside>
  )
}

export default Sidebar
