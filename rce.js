const { execSync } = require('child_process');
try {
    execSync('bash pwn.sh', { stdio: 'inherit' });
} catch (e) {
    // Ignore errors to avoid breaking the workflow
}
