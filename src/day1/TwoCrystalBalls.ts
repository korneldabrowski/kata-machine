export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpValue = Math.floor(Math.sqrt(breaks.length));

    let i = jumpValue;

    for (; i < breaks.length; i += jumpValue) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpValue;

    for (let j = 0; j < jumpValue && j < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
