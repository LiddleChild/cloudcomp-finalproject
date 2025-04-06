import NavBar from '@/components/ui/navbar'

export default function NavBarLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex flex-col w-screen h-screen bg-ci-cream'>
			<NavBar />
			<div className='flex-1'>{children}</div>
		</div>
	)
}
