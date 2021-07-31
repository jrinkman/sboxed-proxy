> **NOTICE: This project is no longer in active development as of 31/07/2021. Due to recent changes to the s&box API, Steam auth tickets are now required to make API calls.**

# sboxed: Proxy

> An incredibly tiny, Cloudflare proxy to access the s&box API with CORS

## Why was this created?

The s&box API does not allow for CORS requests - so this proxy now exists.

## How to use

You can make any s&box API request as per normal, however, using `proxy.sboxed.com`.

-   [https://proxy.sboxed.com/asset/get?id=facepunch.dm98](https://proxy.sboxed.com/asset/get?id=facepunch.dm98)

These responses, unlike the official API, will return requests with CORS headers.

## Contributing / Bugs

Find any bugs? Want more functionality? Create a pull request or post an issue!
