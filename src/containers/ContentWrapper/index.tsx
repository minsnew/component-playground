import { PropsWithChildren } from 'react'

interface ContentWrapperProps {
  className?: string
}

const ContentWrapper = ({
  children,
  className,
}: PropsWithChildren<ContentWrapperProps>) => {
  return <div className={`page-content ${className}`}>{children}</div>
}

export default ContentWrapper
