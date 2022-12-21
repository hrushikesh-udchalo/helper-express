class Helper {
    getStringFromFile(files:any) {
        return files[0].buffer.toString().replace(/(\r\n|\n|\r)/gm, "");
    }
}

export default new Helper();
