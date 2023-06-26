/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output:'standalone',
	env: {
		REQUEST_URL: 'https://wallet-backend-a3tr.onrender.com',
	}
};

module.exports = nextConfig;
