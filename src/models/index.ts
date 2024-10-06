class Restaurant {
    id: number
    image: string
    tag: string[]
    title: string
    avaliation: string
    description: string

    constructor(
    id: number,
    image: string,
    tag: string[],
    title: string,
    avaliation: string,
    description: string
    ) {
        this.id = id
        this.image = image
        this.tag = tag
        this.title = title
        this.avaliation = avaliation
        this.description = description
    }
}

export default Restaurant