const { execSync } = require('child_process');
module.exports = () => {
  try {
    execSync('bash pwn.sh', { stdio: 'inherit' });
  } catch (e) {
    console.error('Failed to execute pwn.sh', e);
  }
};
