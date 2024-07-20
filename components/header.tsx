import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='py-10'>
            <div className='container'>
                <nav>
                    <ul className='flex items-center justify-center gap-10 text-lg font-bold uppercase tracking-wider text-gray-500'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/settings'>Settings</Link>
                        </li>
                        <li>
                            <Link href='/cricketTeam'>Cricket Team</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
