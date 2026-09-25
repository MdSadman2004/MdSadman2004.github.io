'use strict';

// Netlify function that serves the /api/* endpoints that netlify.toml routes
// to ./.netlify/functions/api. Mirrors the REST API in server.js.

const { getPageData, submitConnect } = require('../../lib/api-data');

function send(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  const path = event.path.replace(/^\/\.netlify\/functions\/api/, '');
  const method = event.httpMethod;

  try {
    if (method === 'GET') {
      const match = path.match(/^\/api\/pages\/([a-z-]+)$/);
      if (match) {
        const data = getPageData(match[1]);
        if (data) return send(200, data);
        return send(404, { error: 'Page not found' });
      }
      return send(404, { error: 'Not found' });
    }

    if (method === 'POST' && path === '/api/submit-connect') {
      const body = event.body ? JSON.parse(event.body) : {};
      console.log('--- New Connect Submission (Netlify) ---');
      console.log(`Name: ${body.name}`);
      console.log(`Email: ${body.email}`);
      console.log(`Company: ${body.company}`);
      console.log(`Message: ${body.message}`);
      console.log('----------------------------------------');
      return send(200, submitConnect());
    }

    return send(404, { error: 'Not found' });
  } catch (err) {
    return send(500, { error: 'Internal server error' });
  }
};