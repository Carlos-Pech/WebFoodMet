import React from 'react'

const Header = () => {
  return (
    <header className=' h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8'>
        <div className="flex items-center">
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </header>
  )
}

export default Header;