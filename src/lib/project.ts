export interface Project {
	repos: Repo[];
	values: string[];
	operators: Operator[];
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
	repos: [
		{
			name: 'Felt',
			summary: 'the website for the Felt project (you are here)',
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
			source: 'https://github.com/feltjs/felt-util',
		},
	],
	values: [
		'we put the people who use our software first',
		'sustainability through aligned incentives',
		'intentional collaboration, community, and governance',
		'open source and interoperability',
		'transparency and accountability',
		'simplicity and efficiency',
		'easy and inexpensive self-hosting',
		'privacy by default',
		'accessibility, inclusivity, and diversity',
		'going with the grain of the web',
		'fostering learning, innovation, and experimentation',
	],
};
