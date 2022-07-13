export const PetalRequestApply = {
    productName: '商品名',
    standardName: '規格名',
    classCode: '分類コード',
} as const

export const PetalAuth = {
    userId: 'ユーザID',
    pass: 'パスワード',
} as const

export const FullRequestApply = Object.values(PetalRequestApply)
export const FullAuth = Object.values(PetalAuth)