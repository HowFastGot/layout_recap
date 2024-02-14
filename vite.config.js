import { resolve } from 'path';

export default {
	root: './build',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/js/app.js'), // Adjust the path accordingly
			},
		},
	},
};
