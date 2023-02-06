interface isActive {
  isActive: boolean
  isPending: boolean
}

interface IStyles {
  activeLink: string
  inactiveLink: string
}

export const setIsActive = (isActive: isActive, status: IStyles): string => {
  //   eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return isActive.isActive ? `${status.activeLink}` : `${status.inactiveLink}`
}
