export interface Project {
	name: string;
	source: string;
	summary: string;
	repos: Repo[];
	values: string[];
	// operators: Operator[]; // TODO ?
}

export interface Repo {
	name: string;
	summary: string;
	url: string;
	source: string;
}

export interface Operator {
	name: string;
	url: string;
}

export const project: Project = {
	name: 'Felt',
	source: 'https://github.com/feltjs/felt',
	summary: 'A free and open source toolkit for building and maintaining communities',
	repos: [
		{
			name: 'Felt project website',
			summary: 'you are here',
			url: 'https://www.felt.dev/',
			source: 'https://github.com/feltjs/felt',
		},
		{
			name: '@feltjs/felt-server',
			summary: 'server for Felt, a toolkit for building and maintaining communities',
			url: '', // TODO https://server.felt.dev/
			source: 'https://github.com/feltjs/felt-server',
		},
		{
			name: '@feltjs/felt-ui',
			summary: 'styles and UI components for Svelte and SvelteKit',
			url: 'https://ui.felt.dev/',
			source: 'https://github.com/feltjs/felt-ui',
		},
		{
			name: 'felt-template',
			summary:
				'a static web app and Node library template with Svelte, SvelteKit, Vite, TypesScript, ESLint, Prettier, Gro, and Felt',
			url: 'https://template.felt.dev/',
			source: 'https://github.com/feltjs/felt-template',
		},
		{
			name: '@feltjs/gro',
			summary: 'opinionated webdev toolkit',
			url: '',
			source: 'https://github.com/feltjs/gro',
		},
		{
			name: '@feltjs/felt-util',
			summary: 'a collection of JS utilities to complement the modern web platform',
			url: 'https://util.felt.dev/',
			source: 'https://github.com/feltjs/util',
		},
	],
	values: [
		'we put the people who use our software first',
		'sustainability through aligned incentives',
		'intentional collaboration, community, and governance',
		'accessibility, inclusivity, and diversity',
		'open source, interoperability, and extensibility',
		'distributed power and democracy',
		'transparency and accountability',
		'simplicity and efficiency',
		'privacy by default',
		'easy self-hosting on low-power hardware',
		'fostering learning and experimentation',
	],
};
