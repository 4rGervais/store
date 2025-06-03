import arcjet,{ tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config"

// init arcjet

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // shield protects your app from common attacs like SQL injection XSS and CSRF attacks
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            // this will bock all bots except search engines
            allow:[
                "CATEGORY: SEARCH_ENGINE"
                // if you want tosee the whole list you say 'see the full list at https://arcjet.com/bot-list
            ]
        }),
        tokenBucket({
            mode:"LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10
        })
    ]
})
