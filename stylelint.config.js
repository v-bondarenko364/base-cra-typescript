module.exports = {
	extends: ["stylelint-config-standard"],
	rules: {
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"theme",
					"screen",
				],
			},
		],
		"no-descending-specificity": null,
		"import-notation": null,
	},
};
