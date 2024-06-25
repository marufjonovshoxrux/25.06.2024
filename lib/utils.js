function reload(array, place, componen) {
    place.innerHTML = ' '

    for (let user of array) {
        const ct = componen(user)

        place.append(ct)
    }
}

