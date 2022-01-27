function Navbar () {
    return (
        <div className='navbar bg-green-600'>
          <div className='container flex mx-auto items-center'>
              <div className='w-6/12'>
                <div className='logo text-blue-600 text-center uppercase font-semibold'>
                 Grevi Bayhaki
                </div>
              </div>
              <div className='w-6/12'>
                <div className='nav text-center'>
                  <ul className='nav-item text-white text-opacity-60 flex justify-center space-x-10 py-10 font-semibold'>
                      <li><a className='text-white text-opacity-60 font-semibold text-lg'>Profile
                        </a></li> 
                      <li><a className='text-white text-opacity-60 font-semibold text-lg'>Skills
                        </a></li> 
                      <li><a className='text-white text-opacity-60 font-semibold text-lg'>Project
                        </a></li> 
                      <li><a className='text-white text-opacity-60 font-semibold text-lg'>Contact
                        </a></li>
                  </ul>
                </div>
              </div>
              <div className='w-6/12'>
                <div className='button text-center'>
                  <a className='text-white font-semibold border border-blue-900 text-red-900 rounded-full px-6 py-2'>Kontak</a>
                </div>
              </div>
          </div>
        </div>
      );
    }