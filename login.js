import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);

    alert("✅ Login successful!");
    window.location.href = "Admin.html"; // redirect after login (pwede mong palitan)
  } catch (error) {
    console.error("❌ Login error:", error.message);
    alert(error.message);
  }
});
