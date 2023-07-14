/**
 * Release (deploy to all copies).
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