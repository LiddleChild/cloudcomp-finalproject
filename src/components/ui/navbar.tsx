'use client'

import { signOut, useSession } from 'next-auth/react'
import { Button } from './button'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function NavBar() {
	const session = useSession()
	const user = session?.data?.user

	const router = useRouter()

	const handleLogout = async () => {
		await signOut().catch((err) => {
			console.error(err)
			toast.error('An error occured')
		})

		router.push('/login') // TODO: fix this
	}

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
				<Button
					className='bg-ci-red hover:bg-ci-red/85'
					onClick={handleLogout}
				>
					Logout
				</Button>
			</div>
		</div>
	)
}
