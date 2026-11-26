import BookingSummary from '../components/BookingSummary.jsx'
import { booking } from '../data/booking.js'
import { currentUser } from '../data/currentUser.js'

function Booking() {
  return <BookingSummary items={booking} member={currentUser} />
}

export default Booking
