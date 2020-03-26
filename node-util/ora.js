const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'cyan';
	spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
	spinner.text = 'Loading success';
  spinner.succeed();  
  // spinner.fail();
}, 3000);

