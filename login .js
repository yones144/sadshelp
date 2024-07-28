// login.js
import { auth, db } from './firebase-config.js';
import { signInWithCustomToken } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const code = document.getElementById('code').value;

  const docRef = doc(db, 'loginCodes', code);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    try {
      await signInWithCustomToken(auth, code);
      window.location.href = 'index.html'; // توجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
    } catch (error) {
      console.error("Error signing in:", error);
    }
  } else {
    console.log("Invalid code.");
  }
});