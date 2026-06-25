namespace Express {
    export interface Request {
        user: {
            id: string,
            role: string,
            company_id: string
        }
    }
}