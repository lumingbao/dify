'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src={'/logo/logo.png'}
      className={classNames('block w-[35px] h-[35px]', className)}
      alt='logo'
    />
  )
}

export default LogoSite
