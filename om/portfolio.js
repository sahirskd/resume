import { Entity, Schema } from 'redis-om'

import client from './client.js'

class Portfolio extends Entity { }


const portfolioSchema = new Schema(Portfolio, {
  userName: { type: 'string', textSearch: true },
  fullName: { type: 'string' },
  image: { type: 'string' },
  designation: { type: 'string' },
  about: { type: 'string' },
  address: { type: 'string' },
  phone: { type: 'string' },
  socialLinks: { type: 'string' },
  resumeLink: { type: 'string' },
  skills: { type: 'string[]' },
  experience: { type: 'string' },
  education: { type: 'string' },
})

// PortfolioalStatement: { type: 'text' }
// location: { type: 'point' },
// locationUpdated: { type: 'date' },
// verified: { type: 'boolean' },
// export const portfolioRepository = client.fetchRepository(portfolioSchema)
// await portfolioRepository.createIndex()

export const portfolioRepository = client.fetchRepository(portfolioSchema)

await portfolioRepository.createIndex()

