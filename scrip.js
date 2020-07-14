const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];

  

  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

  let intalLetter = inventors.map(name => {
  let inventorSplit = name.split(" ")
  let result = ''
    for(let i=0; i< inventorSplit.length;i++){
       result += inventorSplit[i][0] + '.'
    }
  return result
  })
  console.log(intalLetter)
  //let result = inventorSplit.map(char => char.charAt[0])).join

  inventors.sort((a,b) => a.length - b.length)
  console.log(inventors)