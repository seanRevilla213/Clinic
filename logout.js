import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("✅ Logged out successfully!");
    window.location.href = "Login.html"; // balik sa login page
  } catch (error) {
    console.error("❌ Logout error:", error.message);
    alert(error.message);
  }
});
