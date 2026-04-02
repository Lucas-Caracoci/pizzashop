import { Link, type LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      {...props}
      className="items text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex gap-1.5 text-sm font-medium transition-colors"
    />
  )
}
