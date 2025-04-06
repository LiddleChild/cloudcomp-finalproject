import { dbclient } from '@/lib/clients/db'
import { DataResponse, MessageResponse } from '@/lib/types/common'
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

export async function GET() {
	try {
		const topics = await dbclient.query('SELECT * FROM topics')

		const resp: DataResponse<Topic[]> = {
			message: 'success',
			data: topics.rows,
		}

		return NextResponse.json(resp, { status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ message: err }, { status: 500 })
	}
}
