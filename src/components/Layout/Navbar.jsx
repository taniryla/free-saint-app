import { FaAlignJustify } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'




export default function Navbar({ title }) {
  return (
    <nav className='navbar mb-12'>
      <div className='container mr-auto'>
        <div className='float-center'>
          <FaAlignJustify className='pr-2 text-3xl' />
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/logout' style={{fontSize: '2vmin'}} className='d-flex align-items-end flex-column btn btn-ghost btn-sm rounded-btn text-secondary'>
              Logout
            </Link>
            <Link to='/history' style={{fontSize: '2vmin'}} className='d-flex align-items-end flex-column btn btn-ghost btn-sm rounded-btn text-secondary'>
              Food history page
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}