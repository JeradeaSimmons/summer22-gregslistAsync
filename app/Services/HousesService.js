import { ProxyState } from "../AppState.js"
import { House } from "../Models/Houses.js"
import { api } from "./AxiosService.js"




class HousesService {
    async editHouse(houseData) {
        let res = await api.put(`/houses/${houseData.id}`, houseData)
        let house = new House(res.data)
        let houseIndex = ProxyState.houses.findIndex(h => h.id == houseData.id)
        ProxyState.houses.splice(houseIndex, 1, house)
        ProxyState.houses = ProxyState.houses

    }

    async getHouses() {
        let res = await api.get('/houses')
        ProxyState.houses = res.data.map(h => new House(h))
    }

    async createHouse(houseFormData) {
        let res = await api.post('/houses', houseFormData)
        let house = new House(res.data)
        ProxyState.houses = [...ProxyState.houses, house]
    }

    async deleteHouse(houseId) {
        let url = `/house/${houseId}`
        await api.delete(url)
    }
}

export const housesService = new HousesService()