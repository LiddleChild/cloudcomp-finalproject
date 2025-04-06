export { default } from 'next-auth/middleware'

export const config = {
	matcher: ['/topics/:path*', '/my-topics/:path*'],
}
