import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

/**
 * The Vuex store
 */
const store = new Vuex.Store({
  state: {
    teams: [
      {
        name: 'Team Jelly',
        members: [
          'Patrick Lagasca',
          'Emily Tse',
          'Bill Luu'
        ],
        scores: [
          { recipe: 'Cucumber Roll', gained: 1 },
          { recipe: 'Salmon Roll', gained: 2 },
          { recipe: 'Tuna Roll', gained: 0 },
          { recipe: 'Crab Roll', gained: 0 },
          { recipe: 'Salmon Nigiri', gained: 0 },
          { recipe: 'Tuna Nigiri', gained: 0 },
          { recipe: 'Shrimp Nigiri', gained: 0 },
          { recipe: 'Unagi Nigiri', gained: 0 },
          { recipe: 'Ikura Roll', gained: 0 },
          { recipe: 'Avocado Roll', gained: 0 },
          { recipe: 'California Roll', gained: 0 },
          { recipe: 'Unagi Roll', gained: 0 },
          { recipe: 'Spicy Salmon Roll', gained: 0 },
          { recipe: 'Spicy Tuna Roll', gained: 0 },
          { recipe: 'Mango Roll', gained: 0 },
          { recipe: 'Rainbow Roll', gained: 0 },
          { recipe: 'Philadelphia Roll', gained: 0 },
          { recipe: 'Explosive Roll', gained: 0 }
        ]
      },
      {
        name: 'Team Boxer',
        members: [
          'Adnan Husain',
          'Alisa Cheung'
        ],
        scores: [
          { recipe: 'Cucumber Roll', gained: 0 },
          { recipe: 'Salmon Roll', gained: 0 },
          { recipe: 'Tuna Roll', gained: 0 },
          { recipe: 'Crab Roll', gained: 0 },
          { recipe: 'Salmon Nigiri', gained: 0 },
          { recipe: 'Tuna Nigiri', gained: 0 },
          { recipe: 'Shrimp Nigiri', gained: 0 },
          { recipe: 'Unagi Nigiri', gained: 0 },
          { recipe: 'Ikura Roll', gained: 0 },
          { recipe: 'Avocado Roll', gained: 0 },
          { recipe: 'California Roll', gained: 0 },
          { recipe: 'Unagi Roll', gained: 0 },
          { recipe: 'Spicy Salmon Roll', gained: 0 },
          { recipe: 'Spicy Tuna Roll', gained: 0 },
          { recipe: 'Mango Roll', gained: 0 },
          { recipe: 'Rainbow Roll', gained: 0 },
          { recipe: 'Philadelphia Roll', gained: 0 },
          { recipe: 'Explosive Roll', gained: 0 }
        ]
      },
      {
        name: 'Team Demon',
        members: [
          'Sarah Lam',
          'Jane Thiem',
          'Helen Du'
        ],
        scores: [
          { recipe: 'Cucumber Roll', gained: 0 },
          { recipe: 'Salmon Roll', gained: 0 },
          { recipe: 'Tuna Roll', gained: 0 },
          { recipe: 'Crab Roll', gained: 0 },
          { recipe: 'Salmon Nigiri', gained: 0 },
          { recipe: 'Tuna Nigiri', gained: 0 },
          { recipe: 'Shrimp Nigiri', gained: 0 },
          { recipe: 'Unagi Nigiri', gained: 0 },
          { recipe: 'Ikura Roll', gained: 0 },
          { recipe: 'Avocado Roll', gained: 0 },
          { recipe: 'California Roll', gained: 0 },
          { recipe: 'Unagi Roll', gained: 0 },
          { recipe: 'Spicy Salmon Roll', gained: 0 },
          { recipe: 'Spicy Tuna Roll', gained: 0 },
          { recipe: 'Mango Roll', gained: 0 },
          { recipe: 'Rainbow Roll', gained: 0 },
          { recipe: 'Philadelphia Roll', gained: 0 },
          { recipe: 'Explosive Roll', gained: 0 }
        ]
      },
      {
        name: 'Team Ninja',
        members: [
          'Henry Tran',
          'Tai Lai',
          'Ginelle Alontave'
        ],
        scores: [
          { recipe: 'Cucumber Roll', gained: 0 },
          { recipe: 'Salmon Roll', gained: 0 },
          { recipe: 'Tuna Roll', gained: 0 },
          { recipe: 'Crab Roll', gained: 0 },
          { recipe: 'Salmon Nigiri', gained: 0 },
          { recipe: 'Tuna Nigiri', gained: 0 },
          { recipe: 'Shrimp Nigiri', gained: 0 },
          { recipe: 'Unagi Nigiri', gained: 0 },
          { recipe: 'Ikura Roll', gained: 0 },
          { recipe: 'Avocado Roll', gained: 0 },
          { recipe: 'California Roll', gained: 0 },
          { recipe: 'Unagi Roll', gained: 0 },
          { recipe: 'Spicy Salmon Roll', gained: 0 },
          { recipe: 'Spicy Tuna Roll', gained: 0 },
          { recipe: 'Mango Roll', gained: 0 },
          { recipe: 'Rainbow Roll', gained: 0 },
          { recipe: 'Philadelphia Roll', gained: 0 },
          { recipe: 'Explosive Roll', gained: 0 }
        ]
      },
      {
        name: 'Team Kirito',
        members: [
          'Deanna Ip',
          'Estee Lee',
          'Gordon Cheung'
        ],
        scores: [
          { recipe: 'Cucumber Roll', gained: 0 },
          { recipe: 'Salmon Roll', gained: 0 },
          { recipe: 'Tuna Roll', gained: 0 },
          { recipe: 'Crab Roll', gained: 0 },
          { recipe: 'Salmon Nigiri', gained: 0 },
          { recipe: 'Tuna Nigiri', gained: 0 },
          { recipe: 'Shrimp Nigiri', gained: 0 },
          { recipe: 'Unagi Nigiri', gained: 0 },
          { recipe: 'Ikura Roll', gained: 0 },
          { recipe: 'Avocado Roll', gained: 0 },
          { recipe: 'California Roll', gained: 0 },
          { recipe: 'Unagi Roll', gained: 0 },
          { recipe: 'Spicy Salmon Roll', gained: 0 },
          { recipe: 'Spicy Tuna Roll', gained: 0 },
          { recipe: 'Mango Roll', gained: 0 },
          { recipe: 'Rainbow Roll', gained: 0 },
          { recipe: 'Philadelphia Roll', gained: 0 },
          { recipe: 'Explosive Roll', gained: 0 }
        ]
      },
      {
        name: 'Team Asuna',
        members: [
          'Justin Fuah',
          'Kimberly Oliveros',
          'Mike Thiem'
        ],
        scores: [
          { recipe: 'Cucumber Roll', gained: 0 },
          { recipe: 'Salmon Roll', gained: 0 },
          { recipe: 'Tuna Roll', gained: 0 },
          { recipe: 'Crab Roll', gained: 0 },
          { recipe: 'Salmon Nigiri', gained: 0 },
          { recipe: 'Tuna Nigiri', gained: 0 },
          { recipe: 'Shrimp Nigiri', gained: 0 },
          { recipe: 'Unagi Nigiri', gained: 0 },
          { recipe: 'Ikura Roll', gained: 0 },
          { recipe: 'Avocado Roll', gained: 0 },
          { recipe: 'California Roll', gained: 0 },
          { recipe: 'Unagi Roll', gained: 0 },
          { recipe: 'Spicy Salmon Roll', gained: 0 },
          { recipe: 'Spicy Tuna Roll', gained: 0 },
          { recipe: 'Mango Roll', gained: 0 },
          { recipe: 'Rainbow Roll', gained: 0 },
          { recipe: 'Philadelphia Roll', gained: 0 },
          { recipe: 'Explosive Roll', gained: 0 }
        ]
      }
    ]
  }
})

export default store
