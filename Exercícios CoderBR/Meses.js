const meses = ['janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
const Meses =[
  {
    mes:'janeiro',
    numero: 1,
  },
  {
    mes:'fevereiro',
    numero: 2,
  },
  {
    mes:'março',
    numero: 3,
  },
  {
    mes:'abril',
    numero: 4,
  },
  {
    mes:'maio',
    numero: 5,
  },
  {
    mes:'junho',
    numero: 6,
  },
  {
    mes:'julho',
    numero: 7,
  },
  {
    mes:'agosto',
    numero: 8,
  },
  {
    mes:'setembro',
    numero: 9,
  },
  {
    mes:'outubro',
    numero: 10,
  },
  {
    mes:'novembro',
    numero: 11,
  },
  {
    mes:'dezembro',
    numero: 12,
  },
]

function Month(numberMonth) {
  Meses.forEach((item) => {
    if(item.numero === numberMonth) {
     return console.log(item.mes)
    } if (numberMonth > 12 || numberMonth < 1){
      return console.log('valor inválido')
    } 
  })
}

Month(2)