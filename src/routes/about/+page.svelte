<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Values from '$lib/Values.svelte';

	import {project} from '$lib/project';
</script>

<svelte:head>
	<title>about felt</title>
</svelte:head>

<div class="markup padded-xl">
	<section>
		<Header>
			<h1>about Felt</h1>
		</Header>
	</section>
	<section>
		<h2>Felt's mission is to make our lives better with technology</h2>
		<p>
			As part of that mission we are developing Felt (<a href="https://www.felt.dev/">felt.dev</a>,
			<a href="https://github.com/feltjs">@feltjs</a> on GitHub), a free and open source toolkit for
			building and maintaining communities, publishing to the web, and collaborating with information.
		</p>
		<p>
			On top of that toolkit we are building the enterprise
			<a href="https://www.felt.social/">Felt.social</a>
			(@feltcoop on
			<a href="https://github.com/feltcoop">GitHub</a>,
			<a href="https://twitter.com/feltcoop">Twitter</a>, and
			<a href="https://fosstodon.org/@feltcoop">Mastodon</a>). It is planned as a collectively-owned
			platform, free of ads and investors, that supports & hosts communities that are human-scale,
			self-governed, consentful, private by default, and deeply customizable and programmable.
		</p>
		<p>
			We plan to announce the Felt software alpha in Q1 2023. For updates subscribe to our
			<a href="https://tinyletter.com/FeltCoop">our monthly newsletter</a>
			and <a href="/toolmakersforum">podcast</a>.
		</p>
	</section>
	<section class="centered panel padded-lg">
		<Values />
	</section>
	<section>
		<h2>Felt's designs for collaboration</h2>
		<ul>
			<li>
				<strong>creation</strong>: the ability to create is a wonderful gift we all share — Felt
				will support authoring many kinds of media, beyond the familiar textbox our social media
				gives us today — imagine designing a novel conversation format to achieve a specific goal,
				like figuring out where to eat lunch with your friends, that's more structured than a chat
				and more freeform than a poll, and tailored to your group's specific needs
			</li>
			<li>
				<strong>consumption</strong>: Felt has (plans for) the familiar social media content like
				text, images, videos, chats, forums, podcasts, and polls, as well as underexplored and novel
				forms of media like structured deliberations, virtual spaces with audio/visual streams, and,
				getting back to the real world, events — imagine going to lunch with friends😋
			</li>
			<li>
				<strong>curation</strong>: if creation and consumption are the primary inputs and outputs of
				our social systems, curation is the buzz of activity around them — in today's social media
				this includes liking posts and sharing links, and there remains a vast wilderness of tags,
				scores, lists, feeds, and other forms of curation — imagine sharing the lunch-with-friends
				decision-making conversation format with others, and discovering similar conversation
				formats made by the broader community, filtered and sorted to your needs
			</li>
		</ul>
	</section>
	<section>
		<h2>Felt's vision</h2>
		<p>
			Felt is more than just a website with features. It's an ambitious constellation of
			<a href="https://github.com/feltcoop">open source web software projects</a> and a
			<a href="https://www.felt.social">community and member/platform co-op</a> (communities owning themselves?
			absurd), — all with a purpose that puts people first. If we do it right, Felt is tech that feels
			good.
		</p>
		<p>
			Felt The Business plans to make money through the revolutionary strategy of selling value to
			users. The current plan is through paid membership subscriptions & hosting services at <a
				href="https://www.felt.social">Felt.social</a
			>. We want a business model that keeps our incentives aligned with our users, so we accept no
			funding from third parties (e.g. advertisers and investors), and we won't sell coins or
			transferable tokens. We hope to provide an excellent customer experience, but we'll make it
			easy to export your data from our service and migrate to another. It's your data, you should
			own it.
		</p>
		<p>
			The company behind Felt will be a democratic worker co-op where us workers share equal
			ownership and control. We believe this model will help Felt The Business remain
			<span class="font-bold whitespace-no-wrap">→ accountable ←</span>
			to its users, workers, and society. To learn more about why we chose this business structure, see
			our (forthcoming) blog post "Why Felt is a worker co-op". In the future, we want to explore the
			<a href="https://platform.coop/">platform cooperative model</a>
			to share control and ownership with our users. (you, we hope!) Our
			<a href="https://github.com/feltjs/felt/blob/main/GOVERNANCE.md">GOVERNANCE.md</a> reflects this
			goal while being up front about our current dictator status as workers.
		</p>
	</section>
	<section>
		<h2>FAQ</h2>
		<details>
			<summary>When can I use Felt?</summary>
			<p>Our current plan is to release the first alpha version of our software in Q1 2023.</p>
		</details>
		<details>
			<summary> Is Felt a secure private messenger? </summary>
			<p>
				This is a nuanced subject: to be clear, <strong
					>from a technical perspective, Felt is not a secure private messenger</strong
				>. Even though we support direct messages between individuals, we currently recommend using
				<a href="https://matrix.org/">Matrix</a>
				or <a href="https://signal.org/">Signal</a> for those usecases.
			</p>
			<p>
				We don't currently support
				<a href="https://wikipedia.org/wiki/End-to-end_encryption">E2EE</a> and minimizing metadata;
				we hold the keys to your stuff, and you'll have to trust both us and your fellow community members
				with the data you share. We plan to offer E2EE in some contexts in the future, starting with
				the low-hanging fruit like ephemeral 1-to-1 chats, but Felt is designed to be a powerful programmable
				platform for communities, which makes privacy and security with good UX an extremely challenging
				problem. Matrix prioritizes privacy and security in a federated context; we prioritize UX in
				a centralized context. What goes for Mastodon goes for Felt: don't send anything in DMs that
				you don't trust the admin with, or anything sensitive at all.
			</p>
		</details>
		<details>
			<summary> Why isn't Felt decentralized/federated? </summary>
			<p>
				We expect our tech — which is focused on <em>communities</em>, not <em>messaging</em> — to
				eventually be decentralized/federated/etc, perhaps with ActivityPub or Matrix or both, but
				today we are focused on UX quality and implementation velocity. We find it much easier to
				deliver good UX with a centralized architecture given the nature of decentralized systems
				and our small self-funded team with no expertise in such things. If Matrix fits your
				usecases, we recommend considering using it instead of Felt. For microblogging, we recommend
				Mastodon. Felt's focus is on communities and their custom needs, with an emphasis on
				delivering a polished UX in smaller scale, higher trust environments. We are however
				attempting to follow the standard ActivityPub/Fediverse/Mastodon/etc
				<a href="https://www.w3.org/TR/activitystreams-vocabulary/">ActivityStreams vocabulary</a>,
				(but not ActivityPub the federated protocol, not yet) setting us up for potential future
				compatibility. We're also maintaining JSON schemas that can be used in any programming
				language, so at least our off-spec stuff is machine-readable.
			</p>
		</details>

		<details>
			<summary>What features will Felt have?</summary>
			<p>Here's the current plan (it'll change):</p>
			<ul>
				<li>customizable tools for online and offline communities</li>
				<li>chats and forums and all sorts of novel variations</li>
				<li>malleable media that we design and share</li>
				<li>advanced moderation and shared governance</li>
				<li>polls and fun interactives</li>
				<li>events and rsvps</li>
				<li>note taking and sharing</li>
				<li>tasks and todos and reminders</li>
				<li>bookmarks and aggregation and adventure</li>
				<li>p2p video, audio, messaging, etc</li>
				<li>blogs and web publishing</li>
				<li>maybe one day, galaxies of interesting communities to explore</li>
				<li>client software that users fully control</li>
				<li>client software that works with many service providers in a single app</li>
				<li>server software that's easy to self-host</li>
				<li>and more, you know</li>
			</ul>
		</details>
		<details>
			<summary>How much does Felt cost?</summary>
			<p>
				If you want to self host, you can go spin up your own instance today. If that sounds like a
				paint though, hosting & memberships will be some modest amount of money, hopefully less than
				you think. We'll probably have a way to invite friends for free. Check back in Q1 2023.
			</p>
		</details>
		<details>
			<summary>
				Why does Felt use permissive and public domain software licenses instead of copyleft?
			</summary>
			<p>
				Currently, all of our public software is licensed either permissively with <a
					href="https://wikipedia.org/wiki/MIT_License">the MIT License</a
				>
				or public domain with <a href="https://wikipedia.org/wiki/Unlicense">the Unlicense</a>. This
				is not a statement against reciprocal
				<a href="https://wikipedia.org/wiki/Copyleft">copyleft licenses</a>; on the contrary, we
				enthusiastically support people choosing strong copyleft licenses like
				<a href="https://wikipedia.org/wiki/Affero_General_Public_License">the AGPL</a>. The current
				consensus of Felt's membership is to use permissive and public domain licenses; each member
				has their own reasons, and this is subject to change. Please be aware: this means
				contributions to our projects are subject to the license of each repo, which currently allow
				usage in closed-source proprietary products, and each repo's license may change in the
				future subject to the co-op's
				<a href="https://github.com/feltjs/felt-ui/blob/main/GOVERNANCE.md">governance procedures</a
				>. The current licenses are compatible with changing to a copyleft license in the future.
			</p>
		</details>
	</section>
	<section>
		<h2>Free and Open Source Software (FOSS)</h2>
		<p>
			Felt is
			<a href="https://wikipedia.org/wiki/Free_and_open-source_software">
				free and open source software
			</a>
			released under the permissive
			<a href="https://github.com/feltjs/felt-ui/blob/main/LICENSE">MIT License</a>
			(<a href="https://wikipedia.org/wiki/MIT_License">see Wikipedia</a>). It's designed to be
			easily self-hosted on low-power hardware, so you can run a private instance for your
			communities and maintain full control.
		</p>
	</section>
	<section>
		<div class="footer-wrapper">
			<Footer>💚</Footer>
		</div>
	</section>
</div>

<style>
	/* TODO should be refactored into using Felt's `section` after updating */
	.footer-wrapper {
		margin-top: 50px;
	}
</style>
