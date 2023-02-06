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
	summary:
		'Felt is free and open source software and tools for building and maintaining communities, publishing to the web, and collaborating with information💚',
	repos: [
		{
			name: 'Felt project website',
			summary: 'you are here',
			url: 'https://www.felt.dev/',
			source: 'https://github.com/feltjs/felt',
		},
		{
			name: '@feltjs/felt-server',
			summary: 'server for Felt, a tool for building and maintaining communities',
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
		'open source, interoperability, and extensibility',
		'transparency and accountability',
		'simplicity and efficiency',
		'easy self-hosting on low-power hardware',
		'privacy by default',
		'accessibility, inclusivity, and diversity',
		'fostering learning and experimentation',
	],
};
