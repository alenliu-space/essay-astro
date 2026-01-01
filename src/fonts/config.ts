import { defineAstroFontProvider } from "astro/config";

export function ZeoSevenFonts() {
	return defineAstroFontProvider({
		entrypoint: "src/utils/zeo_seven_fonts.ts"
	});
}
