import { useForm } from 'react-hook-form'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './form'
import { CreateTopic } from '@/lib/types/topics'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTopicSchema } from '@/lib/schemas/topic'
import { createTopic } from '@/lib/apis/topics'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Input } from './input'
import { Button } from './button'

export default function CreateTopicModalBody() {
	const router = useRouter()

	const form = useForm<CreateTopic>({
		resolver: zodResolver(createTopicSchema),
	})

	const submitHandler = async (data: CreateTopic) => {
		createTopic(data)
			.then(() => {
				toast.success('Registration successful!')
				router.refresh()
			})
			.catch((err) => {
				console.error(err)
				toast.error('An error occured')
			})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(submitHandler)}
				className='bg-white rounded-xl p-8 flex flex-col gap-12 w-full max-w-[450px]'
			>
				<div className='text-4xl font-semibold'>Create Topic</div>
				<div className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='topic_name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Topic Name</FormLabel>
								<FormControl>
									<Input
										placeholder='topic name'
										{...field}
									/>
								</FormControl>
								<FormMessage className='text-xs' />
							</FormItem>
						)}
					/>
				</div>
				<Button className='bg-ci-orange hover:bg-ci-orange/85'>
					Submit
				</Button>
			</form>
		</Form>
	)
}
