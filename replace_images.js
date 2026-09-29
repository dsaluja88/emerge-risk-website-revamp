const fs = require('fs');
const path = require('path');

const baseDir = process.cwd();
const dirsToCheck = [path.join(baseDir, 'app'), path.join(baseDir, 'components')];

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

let files = [];
dirsToCheck.forEach(dir => {
    if (fs.existsSync(dir)) files = files.concat(walkDir(dir));
});

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    if (content.includes('/images/')) {
        const newContent = content.replace(/'\/images\//g, '\'/emergeai-risk-radar/images/').replace(/\"\/images\//g, '\"/emergeai-risk-radar/images/');
        if (newContent !== content) {
            fs.writeFileSync(file, newContent, 'utf-8');
            console.log('Updated', file);
        }
    }
});
