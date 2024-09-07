# Create Sitemap

Simple JavaScript tool to generate a sitemap (if you are lazy).

## Usage

```bash
$ npx create-sitemap https://example.com
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    <url>
        <loc>https://example.com</loc>
        <lastmod>2024-09-07</lastmod>
        <changefreq>always</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```

If `npx create-sitemap https://example.com debug` is used, it will output this:

```xml
<!-- Crawled https://example.com -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    <url>
        <loc>https://example.com</loc>
        <lastmod>2024-09-07</lastmod>
        <changefreq>always</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```
