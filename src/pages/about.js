import React from "react"
import Layout from "../components/layout"


export default function About() {
  return (
    <Layout pageTitle='About'>
      <div>
        <h1 className='headTitle'>About</h1>
        <p className='postText'>
          My name is Edward Kim. I'm a software engineer and food enthusiast. I write my thoughts under tidbits. Sometimes I write down my recipes under food. I give major life updates under life, and tech is just that.
        </p>
        
        <p>
          I like knowing if people go check my blog so shoot me a message if you do.
        </p>
      </div>
    </Layout>
  )
}