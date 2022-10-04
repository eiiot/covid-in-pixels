import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Counter from '../components/counter'

const Home: NextPage = () => {
  const [covidDeaths, setCovidDeaths] = useState(null)

  const gridRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((res) => res.json())
      .then((res) => {
        setCovidDeaths(res.deaths)
      })
  }, [])

  return (
    <div className="h-max-content  text-white">
      <section className="flex h-screen w-screen flex-col items-center justify-center">
        <span className="mx-4 text-center">
          In 2019, SARS-CoV-2 started to spread rapidly across the world,
          beginning a global pandemic.
        </span>
      </section>
      <section className="flex h-screen w-screen flex-col items-center justify-center">
        {/* A SVG with one pixel filled in white */}
        <span className="mx-4 text-center">
          This pixel represents one person who passed away from COVID-19
        </span>
        <svg className="my-3 h-[1px] w-[1px]">
          <rect x="0" y="0" width="1" height="1" fill="white" />
        </svg>
      </section>
      <section className="mb-[50vh] flex h-screen w-screen flex-col items-center justify-center">
        <span className="mx-4 my-2 text-center">
          This grid represents 100 people, all who passed away from COVID-19
        </span>
        <svg width="39" height="39">
          <defs>
            <pattern
              id="secondPattern"
              x="1"
              y="1"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              <rect x="1" y="1" width="1" height="1" fill="#fff" />
            </pattern>
          </defs>
          <rect x="1" y="1" width="39" height="39" fill="url(#secondPattern)" />
        </svg>
      </section>

      <section className="flex h-max w-screen flex-col items-center justify-center">
        <span className="mx-4 text-center">
          This is how many lives COVID-19 has taken in total:
        </span>
        <Counter covidDeaths={covidDeaths} gridRef={gridRef} />

        {covidDeaths ? (
          <svg
            // width="399"
            height={
              (covidDeaths / (window.innerWidth > 399 ? 100 : 75)) * 4 - 1
            }
            className="mt-3 w-[299px] md:w-[399px]"
            ref={gridRef}
          >
            <defs>
              <pattern
                id="secondPattern"
                x="1"
                y="1"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <rect x="1" y="1" width="1" height="1" fill="#fff" />
              </pattern>
            </defs>
            <rect
              x="1"
              y="1"
              className="w-[299px] md:w-[399px]"
              height="100%"
              fill="url(#secondPattern)"
            />
          </svg>
        ) : null}
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center">
        <span className="mx-4 text-center">
          Don't become another pixel.{' '}
          <a href="https://www.vaccines.gov" className="underline">
            Get vaccinated
          </a>{' '}
          and help keep yourself and others safe.
        </span>
        <svg className="my-3 h-[1px] w-[1px]">
          <rect x="0" y="0" width="1" height="1" fill="white" />
        </svg>
      </section>

      <footer>
        <div className="flex h-min w-screen flex-col items-center justify-evenly py-4 md:flex-row">
          <span className="text-center">
            Created by{' '}
            <a
              href="https://eliothertenstein.com"
              className="underline"
            >
              Eliot Hertenstein
            </a>
          </span>
          <span className="text-center">
            Data from{' '}
            <a href="https://disease.sh" target="_blank" className="underline">
              disease.sh
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
