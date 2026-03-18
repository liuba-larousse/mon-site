export function GET({ site }: { site: URL }) {
  const sitemap = new URL("/sitemap.xml", site).toString();
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

