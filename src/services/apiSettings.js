import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.log(error);
    throw new Error("Failed to get settings");
  }

  return data;
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Failed to update setting");
  }

  return data;
}
