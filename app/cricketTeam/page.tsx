import { delay } from '@/lib/utils'
import dynamic from 'next/dynamic'
import React from 'react'

import Layout from "@/components/layout";

const paralellRoute = dynamic(() => import('../../components/parallelRoute'), {
    ssr: false
})


const CricketTeam = async () => {

    await delay(500)
    return (

        <div className='h-60 rounded-xl bg-sky-800 p-10 text-white'>
            <h1 className='text-3xl font-bold'>welcoem to cricket team</h1>
        </div>

    )
}

export default CricketTeam
