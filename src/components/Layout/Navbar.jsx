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
            <UserLogOut user={user} setUser={setUser} />
            <Link to='/foods' style={{fontSize: '1.5vmin', padding: '2vmin'}} className='text-white button'>
              FOOD HISTORY
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}