import { z } from 'zod'
import { createTopicSchema, topicSchema } from '../schemas/topic'

export type Topic = z.infer<typeof topicSchema>
export type CreateTopic = z.infer<typeof createTopicSchema>
