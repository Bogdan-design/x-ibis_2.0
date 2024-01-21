// next-i18next.config.js

const LocizeBackend = require('i18next-locize-backend/cjs')
const ChainedBackend= require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

/**
 * @type {import('next-i18next').UserConfig}
 */

const isBrowser = typeof window !== 'undefined'
module.exports = {

    debug: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale:'en',
        locales: ['en', 'de','pl'],
    },

    backend: {
        backendOptions: [{
            expirationTime: 60 * 60 * 1000 // 1 hour
        }, {
            projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
            version: 'latest'
        }],
        backends: isBrowser ? [LocalStorageBackend, LocizeBackend] : [],
    },
    serializeConfig: false,
    use: isBrowser ? [ChainedBackend] : [],
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./services')
            : '/services',

    reloadOnPrerender: process.env.NODE_ENV === 'development',


}