import axios, { AxiosError } from 'axios'
import { MessageResponse } from '../types/common'
import { CreateTopic } from '../types/topics'

export async function createTopic(data: CreateTopic): Promise<MessageResponse> {
	return await axios
		.post('/api/topics', {
			data,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((resp) => resp.data)
		.catch((err) => {
			if (err instanceof AxiosError) {
				throw err.response?.data
			} else {
				throw err
			}
		})
}
