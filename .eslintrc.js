module.exports = {
	"env": {
		"es2020": true,
		"node": true,
		"browser": true,
		"jquery": true,
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 11,
		"sourceType": "module",
	},
	"parser": "babel-eslint",
	"rules": {
		"indent": ["error", "tab", { "VariableDeclarator": "first" }],
		"linebreak-style": ["error", "unix"],
		"curly": "error",
		"quotes": [
			"warn",
			"double",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true,
			},
		],
		"quote-props": ["error", "always"],
		"semi": ["error", "always"],
		"no-console": ["warn", { "allow": ["warn", "error", "info"] }],
		"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
		"no-unused-vars": [
			"warn",
			{
				"vars": "all",
				"args": "after-used",
				"ignoreRestSiblings": false,
			},
		],
		"arrow-parens": ["error", "always"],
		"arrow-body-style": ["warn", "always"],
		"func-style": ["warn", "declaration", { "allowArrowFunctions": true }],
		"no-confusing-arrow": ["error", { "allowParens": false }],
		"prefer-arrow-callback": "warn",
		"require-await": "error",
		"operator-linebreak": ["warn", "before"],
		"no-constant-condition": ["error", { "checkLoops": false }],
		"no-throw-literal": "warn",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-trailing-spaces": "error",
		"no-multi-spaces": "error",
		"arrow-spacing": "error",
		"keyword-spacing": ["error", { "after": true, "before": true }],
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", "always"],
	},
};