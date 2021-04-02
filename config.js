const config = {
    development: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        layout: 'layout.hbs',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    },
    production: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'https://squido.netlify.app',
        sourcesExt: 'markdown',
        layout: 'layout.hbs',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    }
};

module.exports = config;
