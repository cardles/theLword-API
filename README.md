

## documentação

{GET}/home
início da API
const getHome

{GET}/characters
lista todas as personagens
const getAllCharacters

{GET}/characters/:id
const getCharacterById

{POST}/characters/add
adiciona uma nova personagem
const postNewCharacter

dados esperados:
{
    name: String,
    presentIn: Array,
    about: String,
    sexualOrientation: String,
    occupation: String,
    portrayedBy: String
}


{POST}/characters/add/category
adiciona uma nova categoria à todas as personagens
const postNewCategory

{DELETE}/characters/:id/delete
deleta, por id, uma personagem
const deleteCharacterById

{PUT}/characters/:id/update
atualiza/substitui, por id, dados de uma personagem
const putCharacterById

{PATCH}/characters/:id/update/ilove
atualiza, por id, o campo "iLove" de uma personagem
const patchCategoryById