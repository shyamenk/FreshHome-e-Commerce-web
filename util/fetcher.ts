const fetcher = async (url: string) => await fetch(url).then(res => res.json())

export default fetcher
