import React, { useState, useEffect } from 'react'

export default function SayHi(props) {
  const [name, setname] = useState('jack')

  useEffect(() => {
    setname('lucy tome')
  }, [])

  return (
    <>
      <p>this is my father‘s world</p>
      <p>hi~ my name is {name}</p>
    </>
  )
}
