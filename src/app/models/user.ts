export class User {
    email: string;
    password: string;
    token?: string;
    constructor(param) {
        const {email, password, token} = param;
        if (email) {
            this.email = email;
        }

        if (password) {
            this.password = password;
        }
        this.token = token? token: null;
    }
}
