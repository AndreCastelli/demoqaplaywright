import { expect, test } from '@playwright/test';
import axios from 'axios';

test("create user not ok", async () => {
    try {
        const response = await axios.post('https://demoqa.com/Account/v1/User', {
            "userName": "andre",
            "password": "senha1234"
        });

        expect(response.status).toBe(400);
        
        const errorMessage = response.data.message;

        expect(errorMessage).toContain("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

        console.log('Resposta da API: ', response.data);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
});

test("create user", async () => {
    try {
        const response = await axios.post('https://demoqa.com/Account/v1/User', {
            "userName": "Andre",
            "password": "Senh@1234"
        });

        expect(response.status).toBe(201);
        expect(response.statusText).toBe('Created');

        const message = response.data.username;

        expect(message).toContain("Andre");

        console.log('responseUser: ', response.data);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
});

test('API Get request - get all books', async() => {
    try {
        const response = await axios.get('https://demoqa.com/BookStore/v1/Books');

        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        
        console.log("response data - ", response.data);
    } catch (error) {
        console.error('Erro ao obter livros:', error);
    }
});
