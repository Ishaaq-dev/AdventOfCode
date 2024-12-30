export function quantityOfNums(list2) {
    const map = {}
    list2.forEach(num => {
        if(map[num])
            map[num]++;
        else
            map[num] = 1
    });

    return map;
}

export function getSimilarityScore(list1, quantityMap) {
    const totalSimilarityScore = list1.reduce((acc, cur) => {
        const quantity = quantityMap[cur];
        if (quantity) {
            const similarityScore = cur * quantity;
            return similarityScore + acc;
        }
        else return acc;
    }, 0);

    return totalSimilarityScore;
}