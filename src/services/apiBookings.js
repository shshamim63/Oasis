import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, endDate, startDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
