const handlebars = require('handlebars');
const mjml2html = require('mjml');
const fs = require('fs').promises;
const path = require('path');

async function compileEmailTemplate({ fileName, data }) {
    try {
        const mjMail = await fs.readFile(path.join('email-templates', fileName), 'utf8');
        const { html } = mjml2html(mjMail);
        return handlebars.compile(html)(data).toString();
    } catch (error) {
        console.error('Error compiling email template:', error);
        throw error;
    }
}

module.exports = compileEmailTemplate;
