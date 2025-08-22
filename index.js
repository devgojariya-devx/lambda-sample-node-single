exports.handler = async (event) => {
  let path = event.rawPath || event.path || '/';

  // Extract stage from requestContext
  const stage = event.requestContext?.stage;
  if (stage && path.startsWith(`/${stage}`)) {
    path = path.slice(stage.length + 1);
  }

  if (path === '/hello') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Hello world hii, guys!',
    };
  }

  return {
    statusCode: 404,
    body: 'Not Found',
  };
};
