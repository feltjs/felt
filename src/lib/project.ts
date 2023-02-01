export interface Project {
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
			url: 'https://server.felt.dev/',
			source: 'https://github.com/feltjs/felt-server',
		},
		{
			name: '@feltjs/felt-ui',
			summary: 'styles and Svelte UI components',
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
		'open source',
		'cooperative interoperability and web-friendliness',
		'transparency and accountability',
		'simplicity and efficiency',
		'easy and inexpensive self-hosting',
		'privacy by default',
		'accessibility, inclusivity, and diversity',
		'fostering learning, innovation, and experimentation',
	],
};
