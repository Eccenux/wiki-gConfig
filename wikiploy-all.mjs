/**
 * Release (deploy to all copies).
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

	/**/
	// dev
	configs.push(new DeployConfig({
		src: 'gConfig.js',
	}));
	configs.push(new DeployConfig({
		src: 'gConfig.css',
	}));

	// Gadget @plwiki
	configs.push(new DeployConfig({
		src: 'gConfig.js',
		dst: 'MediaWiki:Gadget-gConfig.js',
	}));
	configs.push(new DeployConfig({
		src: 'gConfig.css',
		dst: 'MediaWiki:Gadget-gConfig.css',
	}));
	/**/

	// Gadget @plws
	configs.push(new DeployConfig({
		src: 'gConfig.js',
		dst: 'MediaWiki:Gadget-gConfig.js',
		site: 'pl.wikisource.org',
	}));
	configs.push(new DeployConfig({
		src: 'gConfig.css',
		dst: 'MediaWiki:Gadget-gConfig.css',
		site: 'pl.wikisource.org',
	}));
	
	await ployBot.deploy(configs);
})().catch(err => {
	console.error(err);
	process.exit(1);
});