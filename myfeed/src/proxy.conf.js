// const PROXY_CONFIG = {
//     "/myfeed/*": {
//         "target": "http://morganstanley.azure-api.net/",
//         "secure": false,
//         "bypass": function (req, res, proxyOptions) {
//             console.log("proxy - inside bypass function.");
//             if (req.headers.accept.indexOf("html") !== -1) {
//                 console.log("Skipping proxy for browser request.");
//                 return "/index.html";
//             }
//             req.headers["X-Custom-Header"] = "yes";
//         }
//     }
// }

// module.exports = PROXY_CONFIG;