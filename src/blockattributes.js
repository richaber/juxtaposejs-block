export default {
	leftId: {
		type: 'number',
		attribute: 'data-leftid'
	},
	leftUrl: {
		type: 'string',
		source: 'attribute',
		selector: '.leftimg',
		attribute: 'src',
	},
	rightId: {
		type: 'number',
		attribute: 'data-rightid'
	},
	rightUrl: {
		type: 'string',
		source: 'attribute',
		selector: '.rightimg',
		attribute: 'src',
	}
};
