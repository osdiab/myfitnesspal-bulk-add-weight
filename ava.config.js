export default {
	extensions: ['ts'],
	files: ['test/**/*.test.ts'],
	require: ['ts-node/register/transpile-only', 'tsconfig-paths/register']
};
