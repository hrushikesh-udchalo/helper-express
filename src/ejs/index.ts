import { render } from "ejs";

class EJS {
    async getEjsString(text: string, data: any) {
        try {
            return await render(text, data, {
                async: true,
            });
        } catch (error) {
            return error;
        }
    }
}

export default new EJS();
