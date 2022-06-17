import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="flex flex-wrap py-20 my-10">
      <StaticImage
        class="h-96 w-96"
        src="../images/BlueFinchLogo.png"
        alt="gatsby astronaut"
      />
      <div class="py-20 w-1/2 text-right">
        <h1 class="px-5 pt-5 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">BlueFinch</h1>
        <h2 class="px-5 pb-5 font-thin text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Technologies Ltd</h2>
        <p class="text-slate-50 p-5">A bespoke software development house, based in the UK.</p>
        <span class="pr-10">
          <a href="mailto:info@bluefinch.uk" class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Get in touch
          </a>
        </span>
      </div>
    </div>


  </Layout>
)

export default IndexPage
