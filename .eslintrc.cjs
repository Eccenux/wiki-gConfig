module.exports = {
    "env": {
		"node": true,
        "browser": true,
        "es2020": true
    },
	"globals": {
		"$": true,
		"mw": true,
		"jQuery": true,
		"mediaWiki": true,
	},
    "extends": "eslint:recommended",
    "parserOptions": {
		"ecmaVersion": 11,
		"sourceType": "module"
    },
    "rules": {
		"no-prototype-builtins": "off",
    }
};
