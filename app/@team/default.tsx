import { delay } from '@/lib/utils'
import React from 'react'

const DetaultTeam = async () => {
    await delay(1000)
    return (
        <div className='h-96 flex-1 rounded-2xl bg-pink-800 p-10 text-white'>
            <h2 className='text-xl font-semibold'>Default Team</h2>
        </div>
    )
}

export default DetaultTeam
