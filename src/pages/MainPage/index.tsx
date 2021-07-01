import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useMemo } from 'react'
import { useContext } from 'react'
import { Context } from '../_App/Context'

import { Page } from '../_App/interfaces'

export const MainPage: Page = () => {
  const context = useContext(Context)

  const content = useMemo(() => {
    if (!context?.user) {
      return (
        <div>
          Необходимо <Link href="signup">Зарегистрироваться</Link> или{' '}
          <Link href="signin">Авторизоваться</Link>
        </div>
      )
    }

    // else

    return <div></div>
  }, [context?.user])

  return (
    <>
      <NextSeo title="Main page" description="Main page description" />

      {content}
    </>
  )
}

/**
 * Example.
 * Commit this if not needed.
 *
 * Get data before render page
 */
MainPage.getInitialProps = () => {
  return {
    statusCode: 200,
  }
}

export default MainPage
