import Spinner from '@/components/shared/Spinner'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'

const ServicePage = () => {
  const {status} = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <Spinner />
  }

  if (status === 'unauthenticated') {
    router.push('/login')
  }

  if (status === 'authenticated') {
    return <div> Service Page added</div>
  }
}

export default ServicePage
