/**
 * Maak de inhoud leeg
 * @param {string} id
 */
export function maakLeeg(id) {
    veranderHTML(id, '');
}

/**
 *
 * @param {string|Element} id
 * @param {string} nieuweInhoud
 */
export function veranderHTML(id, nieuweInhoud) {
    let el = id;
    if (typeof id === 'string') {
        el = pak(id);
    }
    el.innerHTML = nieuweInhoud;
}

/**
 *
 * @param {string|Element} id
 * @param {string} nieuweInhoud
 */
export function veranderText(id, nieuweInhoud) {
    let el = id;
    if (typeof id === 'string') {
        el = pak(id);
    }
    el.innerText = nieuweInhoud;
}

/**
 * Geef het element terug met het opgegeven id
 * @param {string} id
 * @return {HTMLElement}
 */
export function pak(id) {
    return document.getElementById(id);
}

/**
 * maak een nieuw element aan van type type binnen in het element met het opgegeven id.
 * Eventueel kan nog een classname opgegeven worden.
 * Daarna wordt het gemaakte element teruggegeven
 * @param {string} id
 * @param {string} type
 * @param {string=} className
 * @return {HTMLElement}
 */
export function maakBinnenEnGeefTerug(id, type, className) {
    let element = document.createElement(type);
    if (className) {
        element.classList.add(className);
    }
    pak(id).appendChild(element);
    return element;
}
