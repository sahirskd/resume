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
    res.send(false)
  } else {
    res.send(true)
  }

})



router.delete('/:id', async (req, res) => {

  await portfolioRepository.remove(req.params.id)

  res.send({ id: req.params.id })
});
