/**
 * Dev/staging deploy.
 */
import {DeployConfig, WikiployLite} from 'wikiploy';
import {version, info} from './version.mjs';

import * as botpass from './bot.config.mjs';
const ployBot = new WikiployLite(botpass);

// custom summary
ployBot.summary = () => {
	return `v${version}: ${info}`;
}

(async () => {
	const configs = [];
	configs.push(new DeployConfig({
		src: 'gConfig.js',
	}));
	configs.push(new DeployConfig({
		src: 'gConfig.css',
	}));
	await ployBot.deploy(configs);
})().catch(err => {
	console.error(err);
	process.exit(1);
});