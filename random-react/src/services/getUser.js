import React from "react";
import supabase from "./supabase";

async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error getting user:", error.message);
      return null;
    }

    return data.user;
  } catch (error) {
    console.error("Failed to get user:", error);
    return null;
  }
}

export default getUser;
