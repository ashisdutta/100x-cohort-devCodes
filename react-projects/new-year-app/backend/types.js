// input validation code(Zod)

// expected input type-
// body {
//     title: String;
//     description: String;
// }


const zod = require("zod")
const { id } = require("zod/v4/locales")

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
