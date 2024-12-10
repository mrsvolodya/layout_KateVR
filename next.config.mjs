import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // BASE_URL: process.env.BASE_URL,
  },
};

export default withNextIntl(nextConfig);

