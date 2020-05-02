import React, { useState, useEffect, useRef, useContext } from 'react'
import {ThemeContext} from '../App'
const LikeButton: React.FC = (props) => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if(didMountRef.current){
      console.log('this is update')
    }else{
      didMountRef.current = true
    }
  })
  useEffect(() => {
    document.title = `点击了${like}次`
  })
  useEffect(() => {
    if(domRef && domRef.current){
      domRef.current.focus()
    }
  })
  const handleClick = () => {
    setTimeout(() => {
      alert(likeRef.current)
    }, 3000)
  }

  return (
    <>
      <input type="text" ref={domRef}/>
      <button style={theme} onClick={() => {setLike(like + 1); likeRef.current++}}>
        {like} 👍
      </button>
      <button onClick={() => setOn(!on)}>
        {on ? 'ON' : 'OFF'}
      </button>
      <button onClick={handleClick}>
        alert
      </button>
    </>
  )
}

export default LikeButton