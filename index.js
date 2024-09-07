import { js2xml } from "xml-js"; // Importing the js2xml function from the xml-js library
import { crawlSite } from "crawling"; // Importing the crawlSite function from the crawling module

if (process.argv.length < 4) {
    console.log("Please provide a URL to crawl"); // Output a message if the URL is not provided
    process.exit(1); // Exit the process with a non-zero status code
}

const currentDate = new Date().toISOString().split("T")[0]; // Get the current date in ISO format
const sitemap = {
    _declaration: {
        _attributes: {
            version: "1.0",
            encoding: "UTF-8",
        },
    },
    urlset: {
        _attributes: {
            xmlns: "http://www.sitemaps.org/schemas/sitemap-image/1.1",
        },
        url: [],
    },
};

for await (const loc of crawlSite(process.argv[2], 500)) {
    if (process.argv[3] == "debug") {
        console.log(`<!-- Crawled ${loc} -->`); // Output a debug message for each crawled URL if the "debug" argument is provided
    }
    sitemap.urlset.url.push({
        loc,
        lastmod: currentDate,
        changefreq: "always",
        priority: "1.0",
    });
}

const xml = js2xml(sitemap, { compact: true, spaces: 4 }); // Convert the sitemap object to XML format
console.log(xml); // Output the generated XML
