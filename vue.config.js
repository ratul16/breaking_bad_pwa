module.exports = {
    pwa: {
        workboxPluginMode: "GenerateSW",
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://www.breakingbadapi.com/api/characters'),
                    handler: 'cacheFirst',
                    options: {
                        cacheName: 'app-characters',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                },
                {
                    urlPattern: new RegExp('^https://www.breakingbadapi.com/api/quote/'),
                    handler: 'cacheFirst',
                    options: {
                        cacheName: 'app-quote',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                },

                // Testing Umage Caching by file extension
                {
                    urlPattern: new RegExp('/.(png|jpg|jpeg|svg)$/'),
                    handler: 'cacheFirst',
                    options: {
                        cacheName: 'images',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
}