import nextTranslate from "next-translate-plugin";

const nextConfig = {
    reactStrictMode: true,
};

export default nextTranslate(nextConfig, {
    turbopack: !process.argv.includes("--webpack"),
});