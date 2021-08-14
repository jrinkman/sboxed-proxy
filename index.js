const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
};

/**
 * Respond with OPTIONS request
 * @param {Request} request
 */
function handleOptions(request) {
  let headers = request.headers;
  if (
    headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  ){
    return new Response(null, {
      headers: {
        ...corsHeaders,
        "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers"),
      },
    })
  }
  else {
    return new Response(null, {
      headers: {
        Allow: "GET, HEAD, POST, OPTIONS",
      },
    })
  }
}

/**
 * Respond with s&box API request
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);

  // Make the API request
  let response = await fetch(`https://apix.facepunch.com/api/sbox${url.pathname}${url.search}`, {
    headers: {
      'X-Api-Version': '25'
    }
  });

  // Recreate the response to modify the headers
  response = new Response(response.body, response);

  // Set the CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');

  // Append to/Add Vary header so browser will cache response correctly
  response.headers.append('Vary', 'Origin');

  // Return the JSON api response
  return response;
}

addEventListener('fetch', event => {
  const request = event.request;

  // Check whether we're actually making an API request
  if (request.method === 'GET') {
    event.respondWith(handleRequest(event.request));

    // Options request
  } else if (request.method === 'OPTIONS') {
    event.respondWith(handleOptions(event.request));
  }
});
