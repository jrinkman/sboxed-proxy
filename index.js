addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);

  // Return the JSON api response
  return await fetch(`https://apix.facepunch.com/api/sbox${url.pathname}${url.search}`, request);
}