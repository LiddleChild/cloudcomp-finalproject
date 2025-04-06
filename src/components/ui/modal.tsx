import { Button } from './button'

export default function Modal({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='flex flex-col bg-white p-4 rounded shadow-lg'>
				<div className='flex items-center justify-end'>
					<Button className='bg-ci-red hover:bg-ci-red/85'>X</Button>
				</div>
				{children}
			</div>
		</div>
	)
}
