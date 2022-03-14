import { FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserLogOut from '../UserLogOut/UserLogOut'




export default function Navbar({ user, setUser }) {
  return (
    <nav className='navbar mb-12'>
      <div className='container mr-auto'>
        <div className='float-center'>
          <FaAlignJustify className='pr-2 text-5xl' />
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            {/* <Link to='/logout' style={{fontSize: '2vmin'}} className='d-flex align-items-end flex-column btn btn-ghost btn-sm rounded-btn text-secondary'>
              Logout
            </Link> */}
            <UserLogOut user={user} setUser={setUser} />
            <Link to='/foods' style={{fontSize: '1.5vmin'}} className='text-white button btn-xs'>
              FOOD HISTORY PAGE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}