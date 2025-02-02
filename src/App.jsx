import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals } from './features/cartSlice'
function App() {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;