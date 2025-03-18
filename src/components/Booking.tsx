import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailability } from '../store/slices/bookingSlice';
import { RootState } from '../store';

export interface BookingProps {}

export const Booking: React.FC<BookingProps> = () => {
  const dispatch = useDispatch();
  const { availability, loading, error } = useSelector((state: RootState) => state.booking);

  useEffect(() => {
    dispatch(fetchAvailability('00000000-0000-0000-0000-000000000001'));
  }, [dispatch]);

  return (
    <div>
      <h1>Book an Amenity</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {availability.map((slot, index) => (
          <li key={index}>
            {slot.start} - {slot.end} {slot.isAvailable ? 'Available' : 'Unavailable'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
