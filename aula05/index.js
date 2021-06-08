// criando um array contendo objetos, a ideia deste array de objetos
// sera criar uma lista de pets, de modo que cada objeto
// ira representar um animal

let pets = [
    {
        nome : 'Yoshi' ,
        nomeDono : 'Victor' ,
        idade : 7 ,
        raca : 'Akita Inu' ,
        peso : 40 ,
        genero : 'Macho' ,
        cor : 'ruivo' ,
        vacinado : true
    },

    {
        nome : 'Slinky' ,
        nomeDono : 'Sandra' ,
        idade : 7 ,
        raca : 'Basset' ,
        peso : 15 ,
        genero : 'Macho' ,
        cor : 'caramelo' ,
        vacinado : true
    },

    {
        nome : 'Billy' ,
        nomeDono : 'Lucas' ,
        idade : 3 ,
        raca : 'mixer' ,
        peso : 12 ,
        genero : 'Macho' ,
        cor : 'branco' ,
        vacinado : true
    },

    {
        nome : 'Pitchula' ,
        nomeDono : 'Anunciada' ,
        idade : 7 ,
        raca : 'mixer' ,
        peso : 30 ,
        genero : 'Fêmea' ,
        cor : 'branco' ,
        vacinado : true
    }
]

// Criar uma função para listar todos os objetos que temos dentro do array acima
// o propósito desta função é listar o nome de todos os animais contidos dentro da lista
// o nome da função deverá ser listarPets.
// Tempo estimado de 5 min.
// Nome: NomeDoPet

// const listarPets = () => {
//     for (let i = 0; i < pets.length; i++) {
//         console.log('Nome: ' + pets[i].nome);        
//     }
// }
//listarPets() ; execução com loop for

const listarPets = () => {
    pets.forEach(pet => {
        console.log('Nome: ' + pet.nome) ;
    })
}
listarPets() ;

// Criar a função validaDados para validar se o objeto passado para a função cadastrarPet,
// possui as propriedades necessárias (nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado),
// caso não possua deverá retornar false, caso esteja tudo ok com as propriedades, retornar true.
// Obs: utilizar operadores lógicos para solucionar este desafio

const validaDados = (objetoPet) => {
    return (
        objetoPet.nome &&
        objetoPet.nomeDono &&
        objetoPet.idade &&
        objetoPet.tipo &&
        objetoPet.raca &&
        objetoPet.peso &&
        objetoPet.genero &&
        objetoPet.cor &&
        objetoPet.vacinado
    )
}

// Criar uma função para cadastrar pets chamada cadastrarPet, dentro dessa nossa lista de pets 
// contida na variável pets, esta função deverá receber um parâmetro, 
// recomendável que o parâmetro seja um objeto com as mesmas propriedades dos outros objetos 
// existentes dentro do Array, no caso (nome, nomeDono, tipo, raca, genero, idade, peso, 
// cor e vacinado)
// Obs: para cadastrar um novo item dentro da lista de objetos, pesquisem como adicionar um 
// item dentro de um array (existe um método do JS para isso)

// 1 - aplicar validação para verificar se o segundo parâmetro passado na função cadastrarPet
// é realmente um objeto, caso contrário, retornar uma mensagem semelhante a abaixo:
// Insira um objeto válido

// 2 - aplicar validação para verificar se o objeto passado como parâmetro realmente possui todas
// as propriedades necessárias, caso contrário, retornar uma mensagem semelhante a abaixo:
// O objeto não tem todas as propriedades necessárias informadas

const cadastrarPet = (arrayPets, objetoPet) => {
    if(typeof objetoPet == 'object'){
        if(validaDados(objetoPet)){
            arrayPets.push(objetoPet)
            console.log(pets)
        } else {
            console.log('O objeto não tem todas as propriedades necessárias informadas')
        }
        } else {
          console.log('Insira um objeto válido')
        }
      }

let novoPet = {
    nome: 'Trovão',
    nomeDono: 'Danilo',
    idade: 2,
    tipo: 'cachorro',
    raca: 'Pit bull',
    peso: 30,
    genero: 'Macho',
    cor: 'preto',
    vacinado: true
}

cadastrarPet(pets, novoPet)


  
