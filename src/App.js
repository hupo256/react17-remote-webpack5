import React, { useState, useEffect } from 'react'
// import Loadable from './components/loading'
// const ShowTex = Loadable(() => import('sample/showTex'))
// const SayHi = Loadable(() => import('./sayHi'))

import ShowTex from 'sample/showTex'
import SayHi from './sayHi'

export default function Home(props) {
  const [value, setvalue] = useState('111')
  useEffect(() => {
    setvalue('123')
  }, [])
  return (
    <>
      <h2>App {value}, Remote WWE asfsf</h2>
      <SayHi />
      <ShowTex />
    </>
  )
}
