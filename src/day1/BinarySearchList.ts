export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const m = Math.floor(low + (high - low) / 2);
        const value = haystack[m];

        if (value === needle) {
            return true;
        } else if (needle < value) {
            high = m;
        } else {
            low = m + 1;
        }
    } while (low < high);
    return false;
}
