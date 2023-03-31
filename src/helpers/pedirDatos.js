import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000) // Se setea un timeout para simular la peticion al servidor y mostrar el loading antes de renderizar los productos
    })
}