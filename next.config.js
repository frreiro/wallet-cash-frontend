/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output:'standalone',
	env: {
		REQUEST_URL: 'https://ng-backend-0a0e.onrender.com',
	}
};

module.exports = nextConfig;
