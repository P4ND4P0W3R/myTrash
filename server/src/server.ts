import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { db } from "../prisma";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.get('/bins', async (req: Request, res: Response) => {
    try {
        const bins = await db.bins.findMany();
        res.json(bins);
    } catch (error) {
        console.error('Error fetching bins:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await db.users.findMany();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access the server at http://localhost:${PORT}`);
});
