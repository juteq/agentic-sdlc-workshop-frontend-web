import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiResponse<T> {
  Data: T | null;
  Error: {
    Message: string;
    Error: string;
    StatusCode: number;
  } | null;
  Success: boolean;
}

interface AvailabilitySlot {
  start: string;
  end: string;
  isAvailable: boolean;
}

interface BookingState {
  availability: AvailabilitySlot[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  availability: [],
  loading: false,
  error: null,
};

export const fetchAvailability = createAsyncThunk(
  'booking/fetchAvailability',
  async (amenityId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<ApiResponse<AvailabilitySlot[]>>(`/api/Amenity/${amenityId}/availability`);
      if (!response.data.Success) {
        return rejectWithValue(response.data.Error?.Message || 'Unknown error occurred');
      }
      return response.data.Data || [];
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.data?.Error) {
        return rejectWithValue(error.response.data.Error.Message);
      }
      return rejectWithValue('Failed to fetch availability');
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailability.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAvailability.fulfilled, (state, action) => {
        state.loading = false;
        state.availability = action.payload;
      })
      .addCase(fetchAvailability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch availability';
      });
  },
});

export default bookingSlice.reducer;
