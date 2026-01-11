// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 's3 labs Design System',
			logo: {
				src: './src/assets/s3-logo.svg',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/s3labs' },
			],
			customCss: [
				'./src/styles/fonts.css',
				'./src/styles/custom.css',
			],
			sidebar: [
				{ label: 'Overview', slug: 'index' },
				{
					label: 'Brand Identity',
					items: [
						{ label: 'Logo System', slug: 'brand/logo' },
						{ label: 'Color Palette', slug: 'brand/colors' },
						{ label: 'Typography', slug: 'brand/typography' },
					],
				},
				{
					label: 'Components',
					items: [
						{ label: 'Buttons', slug: 'components/buttons' },
						{ label: 'Badges', slug: 'components/badges' },
						{ label: 'Inputs', slug: 'components/inputs' },
						{ label: 'Cards', slug: 'components/cards' },
						{ label: 'Banners', slug: 'components/banners' },
					],
				},
				{
					label: 'Foundations',
					items: [
						{ label: 'Icons', slug: 'foundations/icons' },
						{ label: 'Spacing', slug: 'foundations/spacing' },
						{ label: 'Themes', slug: 'foundations/themes' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Design Tokens', slug: 'resources/tokens' },
						{ label: 'Download Assets', slug: 'resources/assets' },
					],
				},
			],
		}),
	],
});
