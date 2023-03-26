import AdminLayout from '@/components/layout/AdminLayout'
import React, {ReactElement} from 'react'

const OrderDetails = () => {
  return <div>OrderDetails</div>
}

export default OrderDetails

OrderDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  )
}
