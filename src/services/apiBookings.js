import supabase from "./supabase";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, endDate, startDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
