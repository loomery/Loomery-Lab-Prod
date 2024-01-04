/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro_vjwJWrSj.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                               */

const $$Astro$2 = createAstro("https://tommy-holmes.github.io");
const $$Prototype = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Prototype;
  const {
    filename,
    title,
    subtitle,
    heroSrc
  } = Astro2.props;
  const filenameSnakeCase = filename.toLowerCase().replace(/ /g, "_");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(subtitle, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/global.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} - Loomery Lab</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`https://lab.loomery.com/prototypes/${filenameSnakeCase}`, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(subtitle, "content")}><meta property="og:image"${addAttribute(heroSrc, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(`https://lab.loomery.com/prototypes/${filenameSnakeCase}`, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(subtitle, "content")}><meta property="twitter:image"${addAttribute(heroSrc, "content")}>${renderHead()}</head> <body> <div class="bg-cover bg-center"${addAttribute(`background-image: url('${heroSrc}'); ${window.innerWidth > 640 ? "background-attachment: fixed;" : ""}`, "style")}> <header> <div class="p-8 md:px-32 md:py-16"> <nav class="text-brand-light flex md:flex-row justify-between items-center"> <a href="https://loomery.com" class="px-4"><img src="/Loomery-Lab-Prod/Loomery.svg"></a> <div class="hidden md:block"> <a href="https://loomery.com" class="px-4">Back to Loomery.com</a> </div> <div class="md:hidden"> <a href="https://loomery.com"> <!-- Home icon --> <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 002 0v-6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 002 0V10m-9 5a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg> </a> </div> </nav> </div> </header> <section class="flex flex-col items-center text-center space-y-12 mt-48 p-24 bg-gradient-to-t from-bg-dark"> <h1 class="max-w-4xl text-5xl lg:text-7xl">${title}</h1> <h2 class="max-w-4xl text-2xl lg:text-3xl">${subtitle}</h2> </section> </div> <main class="p-8 space-y-48 mb-32 md:px-32 md:py-16"> ${renderSlot($$result, $$slots["default"])} </main>  </body> </html> `;
}, "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/layouts/Prototype.astro", void 0);

const $$Astro$1 = createAstro("https://tommy-holmes.github.io");
const $$Summary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Summary;
  const {
    icons,
    technologies,
    tools,
    features
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center"> <div class="flex flex-row space-x-4 p-12" data-aos="zoom-in"> ${icons.map((icon) => renderTemplate`<img class="h-16"${addAttribute(icon, "src")}>`)} </div> <section class="grid grid-cols-1 md:grid-cols-3 gap-16"> <div data-aos="fade-up" data-aos-delay="0"> <h1 class="text-3xl">Technologies</h1> <ul class="text-lg space-y-2 py-4"> ${technologies.map((technology) => renderTemplate`<li>${technology}</li>`)} </ul> </div> <div data-aos="fade-up" data-aos-delay="200"> <h1 class="text-3xl">Tools</h1> <ul class="text-lg space-y-2 py-4"> ${tools.map((tool) => renderTemplate`<li>${tool}</li>`)} </ul> </div> <div data-aos="fade-up" data-aos-delay="400"> <h1 class="text-3xl">Key features</h1> <ul class="text-lg space-y-2 py-4"> ${features.map((feature) => renderTemplate`<li>${feature}</li>`)} </ul> </div> </section> </section>`;
}, "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/components/Summary.astro", void 0);

const $$Astro = createAstro("https://tommy-holmes.github.io");
const $$Storysight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Storysight;
  return renderTemplate`${renderComponent($$result, "Prototype", $$Prototype, { "filename": "storysight", "title": "Jump inside the story with Storysight", "subtitle": "Pairing GenML and spatial computing for a truely unique and immersive reading expirience", "heroSrc": "/Loomery-Lab-Prod/storysight/war-storysight.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Summary", $$Summary, { "icons": ["/Loomery-Lab-Prod/ML.svg", "/Loomery-Lab-Prod/XR.svg"], "technologies": [
    "Generative machine learning",
    "Virtual reality"
  ], "tools": [
    "Skybox AI",
    "GPT-4",
    "Xcode - RealityKit, SwiftUI"
  ], "features": [
    "Fully immersive books",
    "A new dimension for content consuption",
    "AI assistance with understanding writing techniques and the story"
  ] })} ${maybeRenderHead()}<section class="flex flex-col items-center"> <h2 class="text-5xl p-8 text-center" data-aos="fade-in">The inspiration for building Storysight</h2> <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-8"> <div class="space-y-8 text-lg leading-relaxed" data-aos="fade-in" data-aos-delay="0"> <p>
Off the back of WWDC23's Apple Vision Pro reveal and the release of GPT-4 along with stable diffusion models eariler in the year, 
                    we wanted to explore the possibilities for new experiences that would sit at the crossroads of generative machine learning and spatial computing.
</p> <p>
We wanted to see how we could use these technologies to create a new way of consuming content.
</p> </div> <div data-aos="fade-in" data-aos-delay="200"> <img src="/Loomery-Lab-Prod/storysight/sci-fi.png" class="w-full h-auto rounded-lg"> </div> </div> </section> <section class="flex flex-col items-center"> <h1 class="text-5xl p-8" data-aos="fade-in">The stack</h1> <div class="p-16 space-y-16 flex flex-col items-center"> <div class="flex flex-col text-center items-center max-w-lg"> <img src="/Loomery-Lab-Prod/openai.svg" class="h-32" data-aos="fade-in"> <h3 class="text-2xl p-4" data-aos="fade-up">GPT-4</h3> <p class="text-lg" data-aos="fade-up">
Condense the text from the chapter into a descriptive summary of the setting.
</p> </div> <img src="/Loomery-Lab-Prod/down.svg" class="h-24" data-aos="fade-down"> <div class="flex flex-col text-center items-center max-w-lg"> <img src="/Loomery-Lab-Prod/storysight/blockade.jpg" class="max-h-48 rounded-lg" data-aos="fade-in"> <h3 class="text-2xl p-4" data-aos="fade-up">Skybox AI</h3> <p class="text-lg" data-aos="fade-up">
Feed the description into Skybox AI to generate a skybox image of the setting.
</p> </div> <img src="/Loomery-Lab-Prod/down.svg" class="h-24" data-aos="fade-down"> <div class="flex flex-col text-center items-center max-w-lg"> <div class="aspect-w-16 aspect-h-9"> <img src="/Loomery-Lab-Prod/vision-pro.png" class="aspect-content max-h-48 rounded-lg" data-aos="fade-in"> </div> <h3 class="text-2xl p-4" data-aos="fade-up">Skybox AI</h3> <p class="text-lg" data-aos="fade-up">
Project the skybox image onto a static sphere programmatically and place it in the scene with the user at the centre.
</p> </div> </div> </section> <section class="flex flex-col items-center space-y-8"> <h1 class="text-4xl" data-aos="fade-in">The prototype</h1> <iframe src="https://player.vimeo.com/video/844899766?h=ab41a358f5&autoplay=0&loop=0" class="w-[70vw] h-[30vh] lg:w-[900px] lg:h-[700px]" allow="autoplay; fullscreen" allowfullscreen data-aos="fade-in"></iframe> </section> ` })}`;
}, "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/pages/prototypes/storysight.astro", void 0);

const $$file = "/Users/tomholmes/Developer/Loomery/Engineering Subdomain/src/pages/prototypes/storysight.astro";
const $$url = "/Loomery-Lab-Prod/prototypes/storysight";

export { $$Storysight as default, $$file as file, $$url as url };
