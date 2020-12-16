    function renderProgressBar(selector, data) {
        if (!isValidInput(selector, data)) {
            return false;
        }

        // generuojame turini
        let HTML = '';
        for (let i = 0; i < data.length; i++) {
            const bar = data[i];

            if (typeof bar !== 'object') ||
            bar === null ||
            Array.isArray(bar) ||
            continue;
        }

            HTML += `<div class="progress-bar">
                        <div class="top">
                            <div class="label">${bar.title}</div>
                            <div class="value">${bar.value}%</div>
                        </div>
                        <div class="bottom">
                            <div class="progress" style="width: ${bar.value}%;">
                                <div class="bar"></div>
                            </div>
                        </div>
                    </div>`;
        }

    
        // randame vieta, kur reikes padeti turini
        const DOM = document.querySelector(selector);
        DOM.innerHTML += HTML;
    }
    
    export { renderProgressBar }