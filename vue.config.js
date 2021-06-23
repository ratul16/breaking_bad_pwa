module.exports = {
    pwa: {
        workboxPluginMode: "GenerateSW",
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://www.breakingbadapi.com/api/characters'),
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 50,
                        cacheName: 'app-characters',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                },
                {
                    urlPattern: new RegExp('^https://www.breakingbadapi.com/api/quote/'),
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 50,
                        cacheName: 'app-quote',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
}