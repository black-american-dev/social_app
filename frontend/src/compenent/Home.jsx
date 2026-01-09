import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    navigate(0)
  return (
    <div>
        <Card />
    </div>
  )
}
