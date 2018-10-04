import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teams: [
      {
        name: 'Team Jelly',
        members: [
          'Mike Thiem'
          'Adnan Husain'
          'Deanna Ip'
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
          'Bill Luu'
          'Estee Lee'
          'Tai Lai'
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
          'Henry Tran'
          'Emily Tse'
          'Sarah Lam'
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
          'Patrick Lagasca'
          'Kimberly Oliveros'
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
        name: 'Team Kirito',
        members: [
          'Justin Fuah'
          'Jane Thiem'
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
        name: 'Team Asuna',
        members: [
          'Alston Seto'
          'Ginelle Alontave'
          'John Lee'
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

/*
const store = new Vuex.Store({
  state: {
    teams: [
      {
        name: 'Team Jelly',
        members: [
          'Sarah Lam',
          'Claire Zhang',
          'Andy Wu Wu',
          'Benny Liu',
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
          'Jeff Martens',
          'David Yang',
          'Lesan Liu'
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
          'Kathy Chan',
          'Jacky Chiu',
          'Gordo Cheung'
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
          'Jack Fang',
          'Dana Zhao',
          'Adam Mehina'
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
*/