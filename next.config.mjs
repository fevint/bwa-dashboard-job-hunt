/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ollspyofwsvhvmudtqdz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
