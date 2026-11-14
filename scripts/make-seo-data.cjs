const fs = require('fs');
const path = require('path');

// Read the blogPosts from build-seo-data-runner.cjs
// Let's create complete structured data generator
const { services, locations, routes, cars, blogPosts } = require('./data-source.cjs');

console.log("Assembling lib/seo-data.ts...");

const content = `// Type definitions and structured content for SEO Landing Pages
// Generated statically with full metadata, FAQs, and structured data

export interface ServicePage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string;
  faqs: Array<{ q: string; a: string }>;
}

export interface LocationPage {
  slug: string;
  location: string;
  name?: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  body: string;
  faqs: Array<{ q: string; a: string }>;
}

export interface RoutePage {
  slug: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  body: string;
  bestTime: string;
  placesToSee: string[];
  faqs: Array<{ q: string; a: string }>;
  fares: Array<{ vehicle: string; price: string }>;
}

export interface CarPage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  specs: {
    seats: number;
    type: string;
    ratePerKm: number;
    idealFor: string;
  };
  body: string;
  faqs: Array<{ q: string; a: string }>;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  body: string;
}

export const services: ServicePage[] = ${JSON.stringify(services, null, 2)};

export const locations: LocationPage[] = ${JSON.stringify(locations, null, 2)};

export const routes: RoutePage[] = ${JSON.stringify(routes, null, 2)};

export const cars: CarPage[] = ${JSON.stringify(cars, null, 2)};

export const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};
`;

fs.writeFileSync(path.resolve('lib/seo-data.ts'), content, 'utf8');
console.log("Successfully created lib/seo-data.ts!");
