import React, { useState, useEffect } from 'react'

export default function SayHi(props) {
  const [name, setname] = useState('jack')

  useEffect(() => {
    setname('lucy green')
  }, [])

  return (
    <>
      <p>this is my father‘s world</p>
      <p>hi~ 123 my name is {name}</p>
    </>
  )
}
