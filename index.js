const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);

  // Call the API
  const response = await fetch(`https://apix.facepunch.com/api/sbox${url.pathname}${url.search}`, request);

  // Set the CORS header
  response.headers.set('Access-Control-Allow-Origin', '*');

  // Return the JSON api response
  return response;
}