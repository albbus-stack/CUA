const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "solito",
    "react-native-web",
    "nativewind",
    "expo-linking",
    "expo-constants",
    "expo-modules-core",
  ],
};

module.exports = withExpo(nextConfig);
