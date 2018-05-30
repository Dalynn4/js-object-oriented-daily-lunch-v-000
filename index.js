// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0

class Neighborhood {
  constructor(name){
    this.name = name
    this.id = ++neighborhoodId
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId === this.id
    })
  }
  
  customers() {
    return store.customers.filter(customer => {
      return customer.neighborhoodId === this.id 
    })
  }
  
  meals() {
    
  }
}

let customerId = 0

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.neighborhoodId = neighborhoodId
    this.id = ++customerId
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id 
    })
  }
  
  meals() {
    return store.meals.filter(meal => {
      return meal.customerId === this.id 
    })
  }
  
  totalSpent() {
    
  }
}












  