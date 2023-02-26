import React from 'react'

interface IChervonLeft {
  onClick: () => void
}

export const ChevronLeft = (props: IChervonLeft): JSX.Element => {
  return (
    <svg
      onClick={props.onClick}
      width="32"
      height="32"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.76517 2.23483C7.91161 2.38128 7.91161 2.61872 7.76517 2.76517L4.53033 6L7.76517 9.23484C7.91161 9.38128 7.91161 9.61872 7.76517 9.76516C7.61872 9.91161 7.38128 9.91161 7.23483 9.76516L3.46967 6L7.23483 2.23483C7.38128 2.08839 7.61872 2.08839 7.76517 2.23483Z"
        fill="#1B2A32"
      />
    </svg>
  )
}
