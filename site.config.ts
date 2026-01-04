import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "AlenLiu · Essay",
	prologue: "Some of Alen's words and thoughts.May things get better and better.",
	author: {
		name: "AlenLiu",
		email: "alenliu168@gmail.com",
		link: "https://alenliu.space/"
	},
	description: "Some of Alen's words and thoughts.",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["zh-cn","en","ja"],
		defaultLocale: "zh-cn"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
