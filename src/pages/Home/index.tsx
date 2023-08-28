//deps
import { useDispatch, useSelector }from "react-redux"

//type
import type { AppDispatch,RootState  }from '../../store/index'

//store
import { decrement,increment }from '../../store/count/index'

//layout
import Layout from '../../Layout/index'
export default function Home(){

  const count=useSelector((state:RootState)=>state.count.value)

  const dispatch=useDispatch()
  return(
    <Layout>
      {count}
    </Layout>
  )
}