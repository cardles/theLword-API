const charactersDB = require("../models/characters-TLW")


const getHome = (req, res) => {
    res.status(200).send({
        "name": "theLword API",
        "message": "Olá, seja bem-vindo à minha API, que é um acervo de personagens da série The L Word!",
        "instructions": "Por favor, cheque a documentação para o uso correto desta API."
    })
};


const getAllCharacters = (req, res) => {
    charactersDB.find((err, charactersFound) => {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            if (charactersFound && charactersFound.length > 0) {
                res.status(200).send(charactersFound);
            } else {
                res.status(204).send({ "message": "Poxa, não consegui encontrar. Por favor, cheque a documentação e tente novamente." });
            }
        }
    })
};


const getCharacterById = (req, res) => {
    
    const requestedId = req.params.id;
    
    charactersDB.findById(requestedId, (err, characterFound) => {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            if (characterFound) {
                res.status(200).send(characterFound);
            } else {
                res.status(404).send({ "message": "O id do personagem não foi encontrado." });
            }
        }
    })
};


const postNewCharacter = (req, res) => {
    
    let { name, presentIn, about, sexualOrientation, occupation, portrayedBy } = req.body

    let newCharacter = {
        name,
        presentIn,
        about,
        sexualOrientation,
        occupation,
        portrayedBy
    };

    charactersDB.create(newCharacter, (err) => {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            charactersDB.findOne({ name: newCharacter.name }, (err, characterFound) => {
                if (err) {
                    res.status(500).send({ "message": err.message });
                } else {
                    res.status(200).send([
                        { "message": "Personagem adicionada com sucesso!" }, 
                        characterFound
                    ]);
                }
            })
        }
    })
};

// 610ca8791410652752f1e2be
// const patchCategoryById = (req, res) => {
//     const requestedId = req.params.id;

//     let newCategory = {
//         "iLove": req.body.iLove
//     };

//     charactersDB.findById(requestedId, (err, characterFound) => {
//         if (err) {
//             res.status(500).send({ "message": err.message });
//         } else {
//             if (characterFound) {
//                 charactersDB.save(newCategory, (err) => {
//                     if (err) {
//                         res.status(500).send({ "message": err.message });
//                     } else {
//                         res.status(200).send(characterFound);
//                     }
//                 })
//             } else {
//                 res.status(404).send({ "message": "O id do personagem não foi encontrado." });
//             }
//         }
//     })

// };

const postNewCategory = (req, res) => {

    charactersDB.find({}, (err, charactersFound) => {
        if (err) {
            res.status(500).send({ "message": err.message });
        } else {
            charactersDB.updateMany({}, {$set: {"iLove": true}}, (err) => {
                if (err) {
                    res.status(500).send({ "message": err.message });
                } else {
                    res.status(200).send(charactersFound);
                }
            })
        }
    })
};


module.exports = {
    getHome,
    getAllCharacters,
    getCharacterById,
    postNewCharacter,
    postNewCategory
}