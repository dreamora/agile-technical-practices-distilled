export const createAnagrams = (word: string): string[] => {
    const result: string[] = [];
    if (word.length === 1) {
        result.push(word);
    } else {
        for (let index = 0; index < word.length; index++) {
            createAnagrams(word.slice(0, index) + word.slice(index + 1))
                .map(it => word.at(index) + it)
                .forEach(it => result.push(it));
        }
    }
    return result;
};
