/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/:path*",
                destination: "http://o-complex.com:1337/:path*",
            },
        ];
    },
}

module.exports = nextConfig
