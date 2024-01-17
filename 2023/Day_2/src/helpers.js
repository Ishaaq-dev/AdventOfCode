export function getGameId(gameLine) {
    const gameIdSplit = gameLine.split(":");
    const gameId = gameIdSplit[0].split(" ")[1];
    return parseInt(gameId);
}