export interface UserInterface {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export default class User {

    private userInterface: UserInterface;

    constructor() {
        this.userInterface = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        }
    }

    public getUserInterface(): UserInterface {
        return this.userInterface;
    }
    public setUserInterface(key: keyof UserInterface, value: string): void {
        this.userInterface = { ...this.userInterface, [key]: value };
    }

    public validatePasswords(): boolean {
        return this.userInterface.password === this.userInterface.confirmPassword;
    }

}