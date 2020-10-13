document.addEventListener('DOMContentLoaded', function(){

  let currentPage = 1

  function createMonster(monsterObj){
    const monsterContainer = document.getElementById('monster-container')
    const monsterNode = document.createElement('div')
    const monsterName = document.createElement('h2')
    monsterName.textContent = monsterObj['name']
    const monsterAge = document.createElement('h4')
    monsterAge.textContent = `Age: ${monsterObj['age']}`
    const monsterDesc = document.createElement('p')
    monsterDesc.textContent = `Description: ${monsterObj['description']}`
    monsterNode.append(monsterName)
    monsterNode.append(monsterAge)
    monsterNode.append(monsterDesc)
    monsterContainer.append(monsterNode)
  }

  function getMonsters(pageNumber){
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNumber}`)
    .then(response => response.json())
    .then(function(json){
      console.log(json)
      for (const monster in json) {
        // console.log(json[monster]['name'])
        let monsterObj = json[monster]
        createMonster(monsterObj)
      }
    })
  }

  document.addEventListener('click', function(e){
    if (e.target.matches('#forward')) {
      currentPage++
      getMonsters(currentPage)
      console.log(currentPage)
    } else if (e.target.matches('#back')) {
      currentPage--
      getMonsters(currentPage)
      console.log(currentPage)
    }
  })
getMonsters('http://localhost:3000/monsters/?_limit=20')
})
