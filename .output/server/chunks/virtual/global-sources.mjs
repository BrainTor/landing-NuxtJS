const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/code"
            },
            {
                "loc": "/games/calc"
            },
            {
                "loc": "/games/cross"
            },
            {
                "loc": "/games/find_tres"
            },
            {
                "loc": "/games/ham"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/study"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
