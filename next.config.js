/** @type {import('next').NextConfig} */

const path = require('path')
const dotenv = require('dotenv')

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

const setupEnv = () => {
  console.log(`*0- Running in -----> '${process.env.NEXT_ENV}' <----- environment`)
  
  let envFile = `.env.${process.env.NEXT_ENV}`
  
  console.log('*1- env file:  -----> ', envFile," <----- ")
  try {
    envFile = path.resolve(__dirname, envFile)
    const vars = dotenv.config({ path: envFile })
    console.log('*2- Variables:  -----> ', vars.parsed," <----- ")
  } catch (e) {
    console.error(`Error fetching file in path  -----> '${envFile}'. \nError: ${e.stack}`)
  }
}

setupEnv()
