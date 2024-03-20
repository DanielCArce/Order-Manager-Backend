import fs from 'node:fs'

export async function readFile() {
    
    fs.createReadStream('./routes.json', { encoding: 'utf8' }).on('readable', function () {
        console.log({line:JSON.parse(this.read())})
    })
}
await readFile()