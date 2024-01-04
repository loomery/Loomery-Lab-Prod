/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro_vjwJWrSj.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro("https://tommy-holmes.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/global.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`https://lab.loomery.com`, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="See what we are experimenting with."><meta property="og:image" content=""><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(`https://lab.loomery.com`, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description" content="See what we are experimenting with."><meta property="twitter:image" content="">${renderHead()}</head> <body class="p-8 md:px-32 md:py-16"> <header> <nav class="text-brand-light flex md:flex-row justify-between items-center"> <a href="https://loomery.com" class="px-4"><img src="./Loomery.svg"></a> <div class="hidden md:block"> <a href="https://loomery.com" class="px-4">Back to Loomery.com</a> </div> <div class="md:hidden"> <a href="https://loomery.com"> <!-- Home icon --> <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 002 0v-6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 002 0V10m-9 5a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg> </a> </div> </nav> </header> <main> ${renderSlot($$result, $$slots["default"])} </main>  </body> </html> `;
}, "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://tommy-holmes.github.io");
const $$Showcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Showcase;
  const {
    title,
    platform,
    videoSrc,
    description,
    learnMoreLink
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col text-center items-center space-y-8 md:space-y-16 pb-24 md:pb-12"> <div class="space-y-2 md:space-y-4 max-w-xs md:max-w-4xl"> <h2 class="text-3xl md:text-5xl leading-tight" data-aos="fade-right">${title}</h2> <h2 class="text-xl md:text-3xl text-gray-400" data-aos="fade-left">${platform}</h2> </div> <iframe${addAttribute(videoSrc, "src")} class="w-[70vw] h-[30vh] lg:w-[900px] lg:h-[700px]" allow="autoplay; fullscreen" allowfullscreen data-aos="fade-in"></iframe> <p class="max-w-xs md:max-w-3xl text-sm md:text-xl" data-aos="fade-up">${description}</p> <a${addAttribute(learnMoreLink, "href")} class="text-xl md:text-2xl text-brand-dark" data-aos="fade-in">Learn more</a> </div>`;
}, "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/components/Showcase.astro", void 0);

const $$Astro$1 = createAstro("https://tommy-holmes.github.io");
const $$TechnologySection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechnologySection;
  const {
    icons = [],
    title1,
    divider = "",
    title2 = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center items-center text-center space-y-8 md:space-y-16 mt-20 md:mt-44 lg:mt-96"> <div class="flex flex-wrap justify-center space-x-4 md:space-x-8" data-aos="zoom-in"> ${icons.map((icon) => renderTemplate`<img class="h-12 md:h-24"${addAttribute(icon, "src")}>`)} </div> <div data-aos="fade-in"> <h1 class="text-4xl md:text-8xl mb-8 md:mb-16 tracking-wide">${title1} <b class="text-brand-dark font-bold">${divider}</b> ${title2}</h1> </div> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/components/TechnologySection.astro", void 0);

const $$Astro = createAstro("https://tommy-holmes.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to the Loomery lab." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center h-screen md:h-1/2" data-aos="fade-in"> <div class="flex flex-col justify-center items-center space-y-8 my-24 py-24 md:my-48 md:py-48"> <h1 class="text-3xl md:text-6xl font-bold">Welcome to the <b class="text-brand-dark">Loomery</b> lab</h1> <h3 class="text-xl md:text-4xl">See what we are experimenting with</h3> </div> </section> ${renderComponent($$result2, "TechnologySection", $$TechnologySection, { "icons": ["./ML.svg", "./XR.svg"], "title1": "GenML", "divider": "x", "title2": "XR" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Showcase", $$Showcase, { "title": "Introducing StorySight", "platform": "Apple Vision Pro", "videoSrc": "https://player.vimeo.com/video/844899766?h=ab41a358f5&autoplay=1&loop=1", "description": "StorySight is an experience that combines XR and GenML that allows you to be inside the story, experiencing books in a whole new dimension. StorySight is an example of how GenML can be married up with spatial computing to create new experiences.", "learnMoreLink": "/Loomery-Lab-Prod/prototypes/storysight" })} ` })} ${renderComponent($$result2, "TechnologySection", $$TechnologySection, { "icons": ["./ML.svg"], "title1": "Machine Learning" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Showcase", $$Showcase, { "title": "Generate narration for ANY video", "platform": "iOS", "videoSrc": "https://player.vimeo.com/video/899177107?h=ab41a358f5&autoplay=1&loop=1", "description": "Generate cool voiceovers to your videos in any style your like. This is me doing callisthenics in the video with narration in the style of Alan Partrige doing a eulogy.", "learnMoreLink": "/Loomery-Lab-Prod/prototypes/storysight" })} ` })} ${renderComponent($$result2, "TechnologySection", $$TechnologySection, { "icons": ["./XR.svg"], "title1": "Extended Reality" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Showcase", $$Showcase, { "title": "Your personalised shopping experience with XR", "platform": "Apple Vision Pro", "videoSrc": "https://player.vimeo.com/video/899182055?h=ab41a358f5&autoplay=1&loop=1", "description": "All the benefits of a brick and mortar store, but in the comfort of your own home. This is a demo of how XR can be used to create a personalised shopping experience with fully customisable life size shop items.", "learnMoreLink": "/Loomery-Lab-Prod/prototypes/storysight" })} ` })} ` })}`;
}, "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/pages/index.astro", void 0);

const $$file = "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/pages/index.astro";
const $$url = "/Loomery-Lab-Prod";

export { $$Index as default, $$file as file, $$url as url };
