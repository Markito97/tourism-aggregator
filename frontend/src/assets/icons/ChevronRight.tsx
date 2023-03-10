import React from 'react'

interface IChervonRight {
  onClick: () => void
}

export const ChevronRight = (props: IChervonRight): JSX.Element => {
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
        d="M4.23483 9.76517C4.08839 9.61872 4.08839 9.38128 4.23483 9.23483L7.46967 6L4.23483 2.76516C4.08839 2.61872 4.08839 2.38128 4.23483 2.23484C4.38128 2.08839 4.61872 2.08839 4.76517 2.23484L8.53033 6L4.76517 9.76517C4.61872 9.91161 4.38128 9.91161 4.23483 9.76517Z"
        fill="#1B2A32"
      />
    </svg>
  )
}
