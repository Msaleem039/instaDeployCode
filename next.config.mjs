import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
};

const sentryConfig = {
  silent: true,
  org: 'javascript-mastery',
  project: 'javascript-nextjs',
};

const sentryWebpackConfig = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryConfig, sentryWebpackConfig);
