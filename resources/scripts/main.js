const titleElement = document.getElementById('username');
const arrowHeadElement = document.getElementById('arrow-head');

arrowHeadElement.addEventListener('click', () => {
    document.getElementById('myself').scrollIntoView();
})

async function textAnimation(elm, text, wait, write, erase) {
        for (let i = 0; i < text.length; i++) {
            elm.innerText += text[i];
            await new Promise(r => setTimeout(r, write || 200));
        }
        await new Promise(r => setTimeout(r, wait || 5000));

        for (let i = elm.innerText.length; i > 0; i--) {
            if(elm.innerText.length === 1) {
                elm.innerHTML = "&#8203;";
            } else {
                elm.innerText = elm.innerText.slice(0, -1);
            }
            await new Promise(r => setTimeout(r, erase || 100));
        }
}

async function executeTextAnimations() {
    await textAnimation(titleElement, "Shawiiz_z");
    await textAnimation(titleElement, "Welcome", 500, 100, 50);
    await textAnimation(titleElement, "to", 200, 100, 50);
    await textAnimation(titleElement, "my", 200, 100, 50);
    await textAnimation(titleElement, "website", 500, 100, 50);
    await textAnimation(titleElement, ":D", 200, 100, 100);

    await executeTextAnimations()
}

executeTextAnimations()