import { writeFile } from 'fs';
const pkgfile = {
    "name": "amemei-github-io-npm-cdn",
    "version": "0.0.0-"+new Date().getTime()
}
writeFile('./npm-cdn/amemei-github-io-npm-cdn/package.json', JSON.stringify(pkgfile), function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Package.json file is created successfully.");
})