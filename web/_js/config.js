// This script only applies to this instance of the Atlas.
// Please also check code indicated with "@instanceonly" outside this file.
// TODO: Avoid having instance-only code inside the main scripts to make updating easier.

const prodDomain = "og.place-atlas.stefanocoding.me"
window.prodDomain = prodDomain

const instanceId = "og"
window.instanceId = instanceId

const instanceSubreddit = "placeAtlasOG"
window.instanceSubreddit = instanceSubreddit

const instanceRepo = "https://github.com/Codixer/og-atlas"
window.instanceRepo = instanceRepo

const pageTitle = "The OG r/place Atlas"
window.pageTitle = pageTitle

const canvasSize = {
	x: 768,
	y: 768
}
window.canvasSize = canvasSize

const canvasOffset = {
	x: -384, // -canvasSize.x / 2
	y: -384  // -canvasSize.y / 2
}
window.canvasOffset = canvasOffset

const canvasCenter = {
	x: canvasSize.x / 2 + canvasOffset.x, // 384 - 384 = 0
	y: canvasSize.y / 2 + canvasOffset.y  // 384 - 384 = 0
}
window.canvasCenter = canvasCenter


const variationsConfig = {
	default: {
		name: "OG",
		code: "",
		default: 0,
		drawablePeriods: [0, 0],
		drawableRegions: [
			[[0, 0], [-384, -384, 383, 383]],
		],
		versions: [
			{
				timestamp: "Final",
				url: "./_img/canvas/og/pg-image.png",
			}
		],
		icon: ''
	}
}
window.variationsConfig = variationsConfig

const giscusConfig = {
    repo: "placeAtlas/atlas-2023",
    repoId: "R_kgDOJyrvYg",
    category: "Entry Discussion",
    categoryId: "DIC_kwDOJyrvYs4Cn1UC",
    mapping: "specific",
    strict: "1",
	term: "{ENTRY_ID}",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "top",
    theme: "preferred_color_scheme",
    lang: "en",
    loading: "lazy",
    crossorigin: "anonymous"
}
window.giscusConfig = giscusConfig

let defaultVariation = 'default'
window.defaultVariation = defaultVariation

let defaultPeriod = variationsConfig[defaultVariation].default
window.defaultPeriod = defaultPeriod

const useNumericalId = true
window.useNumericalId = useNumericalId

const externalLinksConfig = [
	{
		name: "Website",
		id: "website",
		generateLink: (link) => link,
		listingClass: "bi-globe",
		generateListingName: (link) => {
			try {
				const urlObject = new URL(link)
				return urlObject.hostname.replace(/^www./, "")
			} catch (e) {
				return "Website"
			}
		},
		displayHTML: "{urlid}",
		placeholder: "https://example.org",
		configureInputField: (inputField) => {
			inputField.type = "url"
			inputField.placeholder = "https://example.com"
			inputField.pattern = "https?://.*"
			inputField.title = "Website URL using the http:// or https:// protocol"
		}
	},
	{
		name: "Discord",
		id: "discord",
		generateLink: (link) => "https://discord.gg/" + link,
		generateListingName: (link) => link,
		listingClass: "bi-discord",
		editorPrefix: "discord.gg/",
		placeholder: "r/example",
		configureInputField: (inputField) => {
			inputField.placeholder = "pJkm23b2nA"
		},
		extractId: (content) => {
			const discordPattern = /^(?:(?:https?:\/\/)?(?:www\.)?(?:(?:discord)?\.?gg|discord(?:app)?\.com\/invite)\/)?([^\s/]+?)(?=\b)$/
			id = content.trim().match(discordPattern)?.[1]
			if (id) {
				return id;
			}
			return content;
		}
	},
	{
		name: "Subreddit",
		id: "subreddit",
		generateLink: (link) => "https://reddit.com/r/" + link,
		listingClass: "bi-reddit",
		generateListingName: (link) => "r/" + link,
		editorPrefix: "reddit.com/",
		placeholder: "pJkm23b2nA",
		configureInputField: (inputField) => {
			inputField.placeholder = "r/example"
			inputField.pattern = "^r\/[A-Za-z0-9][A-Za-z0-9_]{1,50}$"
			inputField.title = "Subreddit in format of r/example"
			inputField.minLength = "4"
			inputField.maxLength = "50"
		},
		extractId: (content) => {
			const subredditPattern = /^(?:(?:(?:(?:(?:https?:\/\/)?(?:(?:www|old|new|np)\.)?)?reddit\.com)?\/)?[rR]\/)?([A-Za-z0-9][A-Za-z0-9_]{1,20})(?:\/[^" ]*)*$/
			id = content.trim().match(subredditPattern)?.[1]
			if (id) {
				return id;
			}
			return content;
		},
		formatIdInEditor: (content) => {
			if (content != "") {
				return "r/" + content;
			}
			return "";
		}
	},
	{
		name: "Wiki",
		id: "wiki",
		generateLink: (link) => "https://place-wiki.stefanocoding.me/wiki/" + link,
		listingClass: "bi-wiki",
		generateListingName: () => "r/place Wiki Article",
		displayHTML: "{urlid}",
		placeholder: "r/place Wiki Article",
		configureInputField: () => {},
		hideInput: true
	},
];


console.info(`%cThe 2023 r/place Atlas
%cCopyright (c) 2017 Roland Rytz <roland@draemm.li>
Copyright (c) 2023 Place Atlas Initiative and contributors
Licensed under AGPL-3.0 (https://2023.place-atlas.stefanocoding.me/license.txt)

https://2023.place-atlas.stefanocoding.me/
https://discord.gg/pJkm23b2nA
https://reddit.com/r/placeAtlas2023
https://github.com/placeAtlas/atlas-2023

To get the image of the canvas, use downloadCanvas().
`, 'font-size: 150%; line-height: 150%', '')
