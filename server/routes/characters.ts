import express from 'express'
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  getMyCharacters,
  getSingleCharacter,
  updateCharacter,
} from '../controllers/characterController'

const router = express.Router()

// === Get all Characters
router.get('/', getAllCharacters)

// === Get all of my Characters
router.get('/mycharacters/:uid', getMyCharacters)

// === Get specific Character
router.get('/:id', getSingleCharacter)

// === POST a new character
router.post('/', createCharacter)

// === DELETE a character
router.delete('/:id', deleteCharacter)

// === UPDATE a character
router.patch('/:id', updateCharacter)

export default router
