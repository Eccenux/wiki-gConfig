/**
 * Release (deploy to all copies).
 */
import {DeployConfig, Wikiploy} from 'wikiploy';

const ployBot = new Wikiploy();

// custom summary
ployBot.summary = () => {
	return 'v1.0.0: move to new repo';
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