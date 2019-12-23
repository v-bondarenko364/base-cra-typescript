import { BrowserOptions } from '@sentry/browser';

const SentryConfig: BrowserOptions = {
	dsn: 'https://4ac71983b48d47798fd5359934a1e32c@sentry.io/1864779',
	// TODO: add proper verisoning in package json
	release: 'base-cra-app@',
};

export default SentryConfig;
