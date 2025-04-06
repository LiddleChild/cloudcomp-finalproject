import { z } from 'zod'

export const topicSchema = z.object({
	topic_id: z.string(),
	topic_name: z.string(),
	created_by: z.string(),
	created_at: z.string().datetime(),
})

export const createTopicSchema = z.object({
	topic_name: z.string(),
	created_by: z.string(),
})
