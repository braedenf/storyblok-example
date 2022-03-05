<script>
	export let links;
</script>

<nav>
	<ul>
		{#each links as link}
			<li><a href={link.route}>{link.name}</a></li>
		{/each}
	</ul>
</nav>
