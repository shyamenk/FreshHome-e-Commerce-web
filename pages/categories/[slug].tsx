import {useRouter} from 'next/router'

const CategoryType = () => {
  const router = useRouter()
  const {slug} = router.query
  return <p>Category: {slug}</p>
}

export default CategoryType
