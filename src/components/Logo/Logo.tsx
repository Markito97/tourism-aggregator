import React from 'react'
import { Link } from 'react-router-dom'
interface LogoProps {
  handle: () => void
}

export const Logo = ({ handle }: LogoProps): JSX.Element => {
  return (
    <div>
      <Link onClick={handle} to={'/'}>
        Logo
      </Link>
    </div>
  )
}
