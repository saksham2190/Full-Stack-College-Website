// Get elements
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle between signup and login forms
if (registerBtn) registerBtn.addEventListener('click', () => container.classList.add('active'));
if (loginBtn) loginBtn.addEventListener('click', () => container.classList.remove('active'));

// Backend API URL
const API = 'http://localhost:5000';

// ----- Signup -----
const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(signUpForm);
    const body = {
      name: form.get('name'),
      email: form.get('email'),
      password: form.get('password')
    };

    try {
      const res = await fetch(`${API}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      alert(data.message || JSON.stringify(data));

      if (data.status === 'ok') {
       
        container.classList.remove('active');
      }
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  });
}


const signInForm = document.getElementById('signInForm');
if (signInForm) {
  signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(signInForm);
    const body = {
      email: form.get('email'),
      password: form.get('password')
    };

    try {
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      alert(data.message || JSON.stringify(data));

      if (data.status === 'ok' && data.token) {
        localStorage.setItem('token', data.token);

        // Optional: Test protected route
        const p = await fetch(`${API}/protected`, {
          headers: { Authorization: 'Bearer ' + data.token }
        });
        const pd = await p.json();
        console.log('protected:', pd);

       
        if (window.parent) {
          window.parent.postMessage('login-success', '*');
        } else {
          
          window.close();
        }
      }
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  });
}
