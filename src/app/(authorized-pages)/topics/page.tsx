import { Button } from '@/components/ui/button'

export default function TopicsPage() {
	return (
		<main className='flex flex-col w-screen h-screen p-10'>
			<div className='flex justify-between'>
				<span className='font-bold text-ci-dark-black'>
					Browse Topics
				</span>
				<Button className='bg-ci-orange hover:bg-ci-orange/85'>
					Create Topic
				</Button>
			</div>
		</main>
	)
}
