"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
let userId;
let username;
let isbn;
(0, test_1.test)("create user not ok", async ({ request }) => {
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: {
            "userName": "andre",
            "password": "senha1234"
        }
    });
    (0, test_1.expect)(response.status()).toBe(400);
    const responseBody = await response.json();
    const errorMessage = responseBody.message;
    (0, test_1.expect)(errorMessage).toContain("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");
    console.log('Resposta da API: ', responseBody);
});
(0, test_1.test)("create user", async ({ request }) => {
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: {
            "userName": "Andre",
            "password": "Senh@1234"
        }
    });
    (0, test_1.expect)(response.status()).toBe(201);
    (0, test_1.expect)(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    const message = responseBody.username;
    (0, test_1.expect)(message).toContain("Andre");
    console.log('responseUser: ', responseBody);
});
(0, test_1.test)('API Get request - get all books', async ({ request }) => {
    const response = await request.get('https://demoqa.com/BookStore/v1/Books');
    (0, test_1.expect)(response.status()).toBe(200);
    (0, test_1.expect)(response.ok()).toBeTruthy();
    console.log("response data - ", await response.json());
});
