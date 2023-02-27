interface isActive {
  isActive: boolean
  isPending: boolean
}

interface IStyles {
  activeLink: string
  inactiveLink: string
}

export const setIsActive = (isActive: isActive, status: IStyles): string => {
  return isActive.isActive ? `${status.activeLink}` : `${status.inactiveLink}`
}
