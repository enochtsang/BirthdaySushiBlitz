import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teams: [
      {
        name: 'Team Jelly',
        members: [
          'Mike Thiem',
          'Adnan Husain',
          'Deanna Ip'
        ]
      },
      {
        name: 'Team B0x3r',
        members: [
          'Bill Luu',
          'Estee Lee',
          'Tai Lai'
        ]
      },
      {
        name: 'Team Demon',
        members: [
          'Henry Tran',
          'Emily Tse',
          'Sarah Lam',
          'Bryson Ding'
        ]
      },
      {
        name: 'Team Ninja',
        members: [
          'Patrick Lagasca',
          'Kimberly Oliveros',
          'Helen Du',
        ]
      },
      {
        name: 'Team Kirito',
        members: [
          'Gordon Cheung',
          'Jane Thiem',
          'Alisa Cheung'
        ]
      },
      {
        name: 'Team Asuna',
        members: [
          'Alston Seto',
          'Ginelle Alontave',
          'John Wang'
        ]
      }
    ]
  }
})

export default store

// const store = new Vuex.Store({
//   state: {
//     teams: [
//       {
//         name: 'Team Jelly',
//         members: [
//           'Sarah Lam',
//           'Claire Zhang',
//           'Andy Wu Wu',
//           'Jared Mok'
//         ]
//       },
//       {
//         name: 'Team B0x3r',
//         members: [
//           'Jeff Martens',
//           'David Yang',
//           'Lesan Liu'
//         ]
//       },
//       {
//         name: 'Team Demon',
//         members: [
//           'Kathy Chan',
//           'Jacky Chiu',
//           'Benny Liu'
//         ]
//       },
//       {
//         name: 'Team Ninja',
//         members: [
//           'Jack Fang',
//           'Dana Zhao',
//           'Adam Mehina'
//         ]
//       }
//     ]
//   }
// })

// export default store
