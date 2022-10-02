const titleElement = document.getElementById('username');
const arrowHeadElement = document.getElementById('arrow-head');
const dropBtnElement = document.getElementsByClassName('dropbtn')[0]

let userLang = getLangCookie() || navigator.language || navigator.userLanguage;

const savedLangs = new Map();

function parseLang(id) {
    if(savedLangs.has(id)) return savedLangs.get(id)

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", location.origin+'/resources/lang/'+id+'.txt', false ); // false for synchronous request
    xmlHttp.send( null );
    const langMap = new Map()
    for(const line of xmlHttp.responseText.split('\n')) {
        const key = line.split('=')[0]
        langMap.set(key, line.replace(key+'=', ''))
    }
    savedLangs.set(id, langMap)
    return langMap;
}

for(const buttonLang of document.getElementsByClassName('dropdown-button')) {
    buttonLang.addEventListener('click', () => {
        setLang(buttonLang.id);
        userLang = buttonLang.id;

        const oldId = buttonLang.id;
        const oldText = buttonLang.innerText;
        buttonLang.id = dropBtnElement.id;
        buttonLang.innerText = dropBtnElement.innerText;
        dropBtnElement.id = oldId
        dropBtnElement.innerText = oldText;
    })
}

function loadDefaultLang() {
    for (const buttonLang of document.getElementsByClassName('dropdown-button')) {
        if(userLang.includes(buttonLang.id)) {
            buttonLang.click()
            return
        }
    }
}

function setLang(id) {
    const parsedLang = parseLang(id)
    setLangCookie(id)

    for(const langElement of document.querySelectorAll("[keylang]")) {
        if(!parsedLang.has(langElement.getAttribute('keylang'))) {
            console.log('Missing keylang: '+langElement.getAttribute('keylang')+' in '+id+' lang.');
            continue
        }
        langElement.innerHTML = parsedLang.get(langElement.getAttribute('keylang'))
    }
}

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
        if (elm.innerText.length === 1) {
            elm.innerHTML = "&#8203;";
        } else {
            elm.innerText = elm.innerText.slice(0, -1);
        }
        await new Promise(r => setTimeout(r, erase || 100));
    }
}

function setLangCookie(id) {
    document.cookie = `lang=${id}; path=/`;
}

function getLangCookie() {
    return document.cookie.includes('lang=') ? document.cookie.split('lang=')[1].split(';')[0] : undefined
}

async function executeTextAnimations() {
    await textAnimation(titleElement, "Shawiiz_z");
    await parseLang('en')
    await textAnimation(titleElement, savedLangs.get(userLang).get('welcome'), 500, 100, 50);
    await textAnimation(titleElement, savedLangs.get(userLang).get('to'), 200, 100, 50);
    await textAnimation(titleElement, savedLangs.get(userLang).get('my'), 200, 100, 50);
    await textAnimation(titleElement, savedLangs.get(userLang).get('website'), 500, 100, 50);
    await textAnimation(titleElement, ":D", 200, 100, 100);

    await executeTextAnimations()
}

executeTextAnimations()
loadDefaultLang()