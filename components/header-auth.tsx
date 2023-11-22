'use client'
import Link from 'next/link'
import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from '@/actions'

export default function HeaderAuth() {
  const session = useSession()

  let authContent: React.ReactNode
  if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={signOut}>
              <Button
                type="submit"
                color="danger"
                variant="bordered"
              >
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    )
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button
              type="submit"
              color="secondary"
              variant="bordered"
            >
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <Button
            type="submit"
            color="primary"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </>
    )
  }

  return authContent
}
