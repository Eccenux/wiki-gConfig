/**
 * Dev/staging deploy.
 */
import {DeployConfig, Wikiploy} from 'wikiploy';
import {version, info} from './version.mjs';

const ployBot = new Wikiploy();

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