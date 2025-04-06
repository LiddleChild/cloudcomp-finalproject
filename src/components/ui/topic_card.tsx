import { Topic } from '@/lib/types/topics'
import Link from 'next/link'

export default function TopicCard({
	topic_id,
	topic_name,
	created_by,
	created_at,
}: Topic) {
	return (
		<div className='flex flex-col p-4 bg-white rounded-lg shadow-md'>
			<h2 className='text-xl font-bold'>{topic_name}</h2>
			<div className='flex justify-between mt-4 text-sm text-gray-500'>
				<span>Created by: {created_by}</span>
				<span>{new Date(created_at).toLocaleDateString()}</span>
			</div>
			<Link href={`/${topic_id}`}>Detail</Link>
		</div>
	)
}
