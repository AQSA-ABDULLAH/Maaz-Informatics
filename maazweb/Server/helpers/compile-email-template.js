// helpers/compile-email-template.js

const mjml2html = require('mjml');
const fs = require('fs');
const path = require('path');

async function compileEmailTemplate({ fileName, data }) {
    const filePath = path.join(__dirname, '..', 'email-templates', fileName);
    const template = fs.readFileSync(filePath, 'utf8');

    // Replace the placeholders with actual data
    let renderedTemplate = template;
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            renderedTemplate = renderedTemplate.replace(regex, data[key]);
        }
    }

    const htmlOutput = mjml2html(renderedTemplate).html;
    return htmlOutput;
}

module.exports = compileEmailTemplate;
