import { Router } from 'express'

import { portfolioRepository } from '../om/portfolio.js'

export const router = Router()

router.put('/portfolio', async (req, res) => {

  // console.log(req.body)
  const portfolio = await portfolioRepository.createAndSave(req.body)

  res.send(portfolio)
})


router.get('/port-all', async (req, res) => {

  const portfolio = await portfolioRepository.search().return.all()

  res.send(portfolio)
})


router.get('/:userName', async (req, res) => {

  const userName = req.params.userName

  const portfolio = await portfolioRepository.search()
    .where('userName').equals(userName).return.first()

  res.send(portfolio)
})

router.get('/search/:userName', async (req, res) => {

  const userName = req.params.userName

  const avlPortfolio = await portfolioRepository.search()
    .where('userName').equals(userName).return.all()

  if (Object.entries(avlPortfolio).length === 0) {
    res.send(true)
  } else {
    res.send(false)
  }

})



router.delete('/:id', async (req, res) => {

  await portfolioRepository.remove(req.params.id)

  res.send({ id: req.params.id })
});

// router.get('/:id', async (req, res) => {

//   /* fetch the Person */
//   const person = await portfolioRepository.fetch(req.params.id)

//   /* return the fetched Person */
//   res.send(person)
// })

// router.post('/:id', async (req, res) => {

//   /* fetch the Person we are updating */
//   const person = await personRepository.fetch(req.params.id)

//   /* set all the properties, converting missing properties to null */
//   person.firstName = req.body.firstName ?? null
//   person.lastName = req.body.lastName ?? null
//   person.age = req.body.age ?? null
//   person.verified = req.body.verified ?? null
//   person.location = req.body.location ?? null
//   person.locationUpdated = req.body.locationUpdated ?? null
//   person.skills = req.body.skills ?? null
//   person.personalStatement = req.body.personalStatement ?? null

//   /* save the updated Person */
//   await personRepository.save(person)

//   /* return the newly updated Person we just updated */
//   res.send(person)
// })

// router.delete('/:id', async (req, res) => {

//   /* delete the Person with its id */
//   await personRepository.remove(req.params.id)

//   /* return the id of the deleted person */
//   res.send({ id: req.params.id })
// })
