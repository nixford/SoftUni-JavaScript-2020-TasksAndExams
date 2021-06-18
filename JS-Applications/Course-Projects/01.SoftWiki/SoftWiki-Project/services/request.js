const request = async (method, url, body) => {
    let options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json'
            },
            bady: JSON.stringify(body)
        })
    }

    let response = await fetch(url, options);

    let data = await response.json();

    return data;
}

export default {
    get: request.bind('GET'),
    post: request.bind('POST'),
    put: request.bind('PUT'),
    patch: request.bind('PATCH'),
    delete: request.bind('DELETE'),
}