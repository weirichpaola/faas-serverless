exports.handler = (event, context, callback) => {
    // Function code goes here
    callback(null, {
        statusCode: 200,
        body: 'Hello, world!',
    });
};