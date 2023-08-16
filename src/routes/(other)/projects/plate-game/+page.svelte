<svelte:head>
	<title>The Plate Game</title>
	<link rel="icon" type="image/x-icon" href="/plate-game-icon.png" />
</svelte:head>

<div>
	<h1>Plate Game</h1>

	<p>
		<img id="iconImage" src="/plate-game-icon.png" alt="Icon for the Plate Game app" height="225" />
	</p>

	<p id="appStoreLink">
		<a href="https://apps.apple.com/app/plate-game/id6443521748"
			><img src="/app-store-badge.svg" alt="Download on the App Store" height="60" /></a
		>
	</p>

	<p id="playStoreLink">
		<a href="#iconImage"><img src="/google-play-badge.png" alt="Get it on Google Play" height="75" /></a>
	</p>

	<p>Now available on iOS! Coming soon to Android...</p>

	<br />
	<br />
	<br />

	<p id="createdBy">Created by <a id="createdByUrl" href="/">Patrick</a> 🦖 🦕</p>
</div>

<style>
	div {
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
		background-color: #fff;
		color: #000;
		overflow: auto;
	}

	h1 {
		font-weight: lighter;
		font-size: 36px;
		margin: 24px 12px;
	}

	#iconImage {
		border-radius: 12px;
	}

	#appStoreLink {
		margin-top: 18px;
		margin-bottom: 0px;
	}

	#playStoreLink {
		margin-top: 4px;
		margin-bottom: 12px;
	}

	#createdBy {
		position: fixed;
		left: 0px;
		bottom: 0px;
		height: 40px;
		width: 100%;
		color: #a9a9a9;
		font-weight: lighter;
		padding-top: 5px;
		background-color: rgba(255, 255, 255, 0.97);
	}

	#createdByUrl:hover {
		color: #a9a9a9d7;
		text-decoration: underline;
	}

	#createdByUrl {
		color: #a9a9a9;
		text-decoration: none;
	}
</style>
