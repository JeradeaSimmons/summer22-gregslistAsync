import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"






function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
  document.getElementById('form').innerHTML = getHouseForm()
}



export class HousesController {

  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }

  viewHouses() {
    _drawHouses()
    this.getHouses
    // swap out car form with house form
  }
  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error('[Get Houses]', error)
      Pop.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      let form = window.event.target

      let newHouse = {
        bathrooms: form.bathrooms.value,
        bedrooms: form.bedrooms.value,
        description: form.description.value,
        imgUrl: form.img.value,
        price: form.price.value,
        year: form.year.value,
        levels: form.levels.value,
      }
      console.log(newHouse);
      await housesService.createHouse(newHouse)
      form.reset()
    }
    catch (error) {
      console.error('[Create House]', error)
      Pop.error(error)
    }
  }

  adjustHouse(houseId) {
    let house = ProxyState.houses.find(h => h.id == houseId)
    document.getElementById('form').innerHTML = getHouseForm(house)
  }

  async deleteHouse(houseId) {
    try {
      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error('[Delete House]', error)
      Pop.error(error)
    }
  }


  async editHouse(houseId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let houseData = {
        id: houseId,
        year: form.year.value,
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        price: form.price.value,
        imgUrl: form.img.value,
        description: form.description.value,
        levels: form.levels.value

      }
      await housesService.editHouse(houseData)
    } catch (error) {
      console.error('[Edit House]', error)
      Pop.error(error)
    }
  }


}