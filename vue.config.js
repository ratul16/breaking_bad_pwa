module.exports = {
    pwa: {
        workboxPluginMode: "GenerateSW",
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://www.breakingbadapi.com/api/'),
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 20,
                        cacheName: 'app-cache',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
}