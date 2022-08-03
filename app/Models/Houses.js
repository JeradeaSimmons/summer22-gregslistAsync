
export class House {
    constructor({ id, bathrooms, bedrooms, description, imgUrl, price, year, levels }) {
        this.id = id
        this.year = year || 0
        this.bedrooms = bedrooms || 0
        this.bathrooms = bathrooms || 0
        this.price = price || 0
        this.imgUrl = imgUrl || ''
        this.description = description || ''
        this.levels = levels || 0
    }



    get Template() {
        return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.bedrooms} | ${this.year} | ${this.bathrooms}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Edit Listing</button> 
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Good Bye</button> 
        </div>
      </div>
    </div>
    
    
    
    `
    }
}