exports.userLogin = {
    type: "object",
    properties: {
        userName: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
    },
    required: ["userName", "password"],
    additionalProperties: false,
}

exports.createBook = {
    type: "object",
    properties: {
        title: { type: "string", minLength: 1, maxLength: 255 },
        author: { type: "string", minLength: 1, maxLength: 255 },
        publicationYear: { type: "number", minLength: 1, maxLength: 255 },
    },
    required: ["title", "author","publicationYear"],
    additionalProperties: false,
}

exports.getBookInfo = {
    type: "object",
    properties: {

    },
    required: [],
    additionalProperties: false,
}

exports.updateBook = {
    type: "object",
    properties: {
        title: { type: "string", minLength: 1, maxLength: 255 },
        author: { type: "string", minLength: 1, maxLength: 255 },
        publicationYear: { type: "number", minLength: 1, maxLength: 255 },
    },
    required: [],
    additionalProperties: false,
}


exports.deleteBook = {
    type: "object",
    properties: {

    },
    required: [],
    additionalProperties: false,
}

