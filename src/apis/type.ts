export interface Pokedex {
    response: Response
}

export interface Response {
    header: Header
    body: Body
}

export interface Body {
    dataType: string
    items: Items
    pageNo: number
    numOfRows: number
    totalCount: number
}

export interface Items {
    item: Item[]
}

export interface Item {
    baseDate: string
    baseTime: string
    category: string
    nx: number
    ny: number
    obsrValue: string
}

export interface Header {
    resultCode: string
    resultMsg: string
}
