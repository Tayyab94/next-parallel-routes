import { delay } from '@/lib/utils'
import React from 'react'

export const dynamic = 'force-dynami'


const Settings = async () => {
    await delay(5000);
    return (
        <div className='h-96 flex-1 rounded-2xl bg-purple-800 p-10 text-white'>
            <h2 className='text-xl font-semibold'>Settings</h2>
        </div>
    )
}

export default Settings
