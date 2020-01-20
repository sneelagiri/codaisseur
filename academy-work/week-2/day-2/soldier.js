function promote(soldier){
  switch (soldier.rank) {
      case 'private':
          return {
            firstName: soldier.firstName, //returns a new object
            lastName: soldier.lastName,
            rank: 'private-1st-class',
            salaryUSD: 4250
          }

      case 'private-1st-class':
          return {
            ...soldier,
            rank: 'specialist',
            salaryUSD: 4750
          }
      case 'specialist':
          return {
            ...soldier,
            rank: 'corporal',
            salaryUSD: 5100
          }
      case 'corporal':
          return {
            ...soldier,
            rank: 'sergeant',
            salaryUSD: 5700
          }
      default:
          return soldier
  }
}
const soldier = { firstName: 'Biggs', lastName: 'Darklighter', rank: 'specialist', salaryUSD: 4750 }
const promotedSoldier = promote(soldier)
console.log("Soldier's Old Rank: ", soldier, "Soldier's New Rank", promotedSoldier)
console.log('same object?', soldier === promotedSoldier) // output same object? true
const soldier2 = { firstName: 'Wedge', lastName: 'Antilles', rank: 'private-1st-class', salaryUSD: 4250 }
const promotedSoldier2 = promote(soldier2)
console.log("Soldier's Old Rank: ", soldier2, "Soldier's New Rank", promotedSoldier2)
console.log('same object?', soldier2 === promotedSoldier2) // output same object? true