<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<header class="topbar">
	<div class="topbar-inner">
		<ul>
			<li>
				<a class="logo" href={resolve('/')} aria-label="Back home">
					<span class="icon">
						<i class="fas fa-terminal"></i>
					</span>
				</a>
			</li>
			<li><a href={resolve('/portfolio')}>Portfolio</a></li>
			<li><a href={resolve('/about')}>About</a></li>
		</ul>
		<a href={resolve('/')}>JODAROVE</a>
	</div>
</header>

<style>
	.topbar {
		background: var(--green);
		color: var(--gray);
		border-bottom: 2px solid var(--greenish);
	}

	.topbar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		max-width: 72rem;
		margin-inline: auto;
		padding: 0.75rem 1rem;

		li a {
			font-family: 'Fira Code', monospace;
			font-size: 1.2rem;
		}
	}

	ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	li a {
		color: var(--gray);
		text-decoration: none;
	}
</style>
