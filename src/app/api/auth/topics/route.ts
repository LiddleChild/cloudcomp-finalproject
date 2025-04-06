import { dbclient } from '@/lib/clients/db'
import { MessageResponse } from '@/lib/types/common'
import { NextRequest, NextResponse } from 'next/server'
import { Topic } from '@/lib/types/topics'

export async function POST(req: NextRequest) {
	const json = await req.json()
	const data = json.data as Topic

	try {
		await dbclient.query(
			'INSERT INTO topics (topic_name, created_by) VALUES ($1, $2)',
			[data.topic_name, data.created_by],
		)

		const resp: MessageResponse = {
			message: 'success',
		}

		return NextResponse.json(resp, { status: 201 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ message: err }, { status: 500 })
	}
}
