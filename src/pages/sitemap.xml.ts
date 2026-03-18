import { getCollection } from "astro:content";

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET({ site }: { site: URL }) {
  const staticPaths = [
    "/",
    "/services/",
    "/etudes-de-cas/",
    "/blog/",
    "/a-propos/",
    "/contact/",
    "/mentions-legales/",
    "/politique-de-confidentialite/",
    "/rss.xml",
    "/robots.txt",
  ];

  const posts = (await getCollection("blog")).filter((p) => !p.data.draft);
  const postPaths = posts.map((p) => `/blog/${p.slug}/`);

  const urls = [...staticPaths, ...postPaths].map((path) => {
    const loc = new URL(path, site).toString();
    return `<url><loc>${xmlEscape(loc)}</loc></url>`;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

