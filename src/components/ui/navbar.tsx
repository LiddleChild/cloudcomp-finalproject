'use client'

import { useSession } from 'next-auth/react'
import { Button } from './button'

export default function NavBar() {
	const session = useSession()
	const user = session?.data?.user

	return (
		<div className='flex items-center justify-between bg-white p-2 shadow-md'>
			<div className='flex items-center gap-4'>
				<Button className='bg-ci-dark-red hover:bg-ci-dark-red/85'>
					Home
				</Button>
				<Button className='bg-ci-dark-red hover:bg-ci-dark-red/85'>
					My Topics
				</Button>
			</div>
			<div className='flex items-center gap-4'>
				<span className='font-bold text-ci-dark-black'>
					{user?.display_name}
				</span>
				<Button className='bg-ci-red hover:bg-ci-red/85'>Logout</Button>
			</div>
		</div>
	)
}
