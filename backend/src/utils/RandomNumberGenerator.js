"use strict"

export function randomNumber(min=1, max=10) {
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    return a;
}
