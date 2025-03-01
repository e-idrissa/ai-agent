export const getVideoIdFromUrl = (url: string) => {
    return url.split("v=")[1];
}