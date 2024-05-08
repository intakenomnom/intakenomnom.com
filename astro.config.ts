export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	// TODO Place your site URL here
	// site: "",
	compressHTML: false,
	integrations: [
		(await import("@astrojs/solid-js")).default(),
		// @ts-ignore
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("@playform/inline")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		(await import("@playform/format")).default({ Logger: 1 }),
		(await import("@playform/compress")).default({
			Logger: 1,
			HTML: {
				"html-minifier-terser": {
					removeComments: true,
					ignoreCustomComments: [
						/^\s*#/,
						/^\s*$/,
						/^\s*\[/,
						/^\s*\]/,
						/^\s*!/,
						/^\s*\//,
					],
				},
			},
		}),
	],
	experimental: {
		directRenderScript: true,
	},
	vite: {
		build: {
			sourcemap: true,
		},
	},
}) as typeof defineConfig;

import type { defineConfig } from "astro/config";
