// This file contains the JavaScript code that handles the dynamic behavior of the website.
// It includes functions to fetch and display the extension versions.

document.addEventListener('DOMContentLoaded', () => {
    const versionList = document.querySelector('#version-list');

    // Extension versions for each browser
    const extensions = {
        firefox: [
            {
                version: '1.0.0',
                description: 'Initial release',
                file: 'downloads/firefox/v1.0.0/8ee19ab5c5194a66bcaa-1.0.xpi'
            },
        ],
        // chrome: [
        //     {
        //         version: '1.0.0',
        //         description: 'Unreleaded version',
        //     },
        // ],
        // edge: [
        //     {
        //         version: '1.0.0',
        //         description: 'Unreleased version',
        //     }
        // ]
    };

    // Helper to create a section for each browser
    function createBrowserSection(browser, versions) {
        const section = document.createElement('section');
        section.className = 'browser-section';

        const h3 = document.createElement('h3');
        h3.textContent = browser.charAt(0).toUpperCase() + browser.slice(1);
        section.appendChild(h3);

        const ul = document.createElement('ul');
        versions.forEach(version => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = version.file;
            link.download = '';
            link.textContent = `v${version.version}`;
            li.appendChild(link);

            const desc = document.createElement('span');
            desc.textContent = ` – ${version.description}`;
            li.appendChild(desc);

            ul.appendChild(li);
        });
        section.appendChild(ul);
        return section;
    }

    // Clear existing content and add browser sections
    versionList.innerHTML = '';
    for (const [browser, versions] of Object.entries(extensions)) {
        versionList.appendChild(createBrowserSection(browser, versions));
    }
});