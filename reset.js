import { auth } from './firebase.js';
import { sendPasswordResetEmail } from 'firebase/auth';

document.getElementById('resetForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('resetEmail').value;
  
  try {
    await sendPasswordResetEmail(auth, email);
    // Show success message or redirect
    alert('Password reset email sent! Check your inbox.');
  } catch (error) {
    // Handle errors (user not found, invalid email, etc.)
    alert('Error: ' + error.message);
  }
});