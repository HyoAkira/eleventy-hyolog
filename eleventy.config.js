import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    // eleventyConfig.addFilter("gurl", function (url) {
    //     return `/eleventy-hyolog${url}`;
    // });
    return {
        pathPrefix: "/eleventy-hyolog/",

    };
};