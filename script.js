/* ===== Base Theme ===== */
body {
  background-color: #0b2e13; /* dark forest green */
  color: #f0f0f0;
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

h1, h2, h3 {
  color: #7fff7f;
  font-family: 'Cormorant Garamond', serif;
}

a {
  color: #7fff7f;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* ===== Navbar ===== */
nav {
  background-color: #133d20;
  padding: 12px 20px;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
  border-bottom: 2px solid #1d4d2d;
}
nav a {
  color: #fff;
  font-weight: 600;
}
nav a:hover {
  color: #7fff7f;
}

/* ===== Auth Box (Login Page) ===== */
.auth-box {
  background: #133d20;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  text-align: center;
  margin: auto;
}

.auth-box h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

#userInfo {
  margin-top: 15px;
  font-size: 14px;
  color: #ddd;
}

/* ===== Buttons ===== */
button {
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn {
  background: linear-gradient(90deg, #28a745, #218838);
  color: white;
}
.login-btn:hover {
  background: linear-gradient(90deg, #34d058, #28a745);
}

.signup-btn {
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
}
.signup-btn:hover {
  background: linear-gradient(90deg, #3399ff, #007bff);
}

.logout-btn {
  background: linear-gradient(90deg, #dc3545, #a71d2a);
  color: white;
}
.logout-btn:hover {
  background: linear-gradient(90deg, #e55365, #c82333);
}

/* ===== Role Picker ===== */
.roles {
  background: #1d4d2d;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.roles h3 {
  margin-bottom: 10px;
  color: #7fff7f;
  font-size: 16px;
}

.roles label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.4;
  font-size: 14px;
  word-wrap: break-word;
  white-space: normal; /* force wrapping */
}

.roles input {
  margin-top: 3px;
  flex-shrink: 0;
}

/* ===== Tables ===== */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #133d20;
  border-radius: 8px;
  overflow: hidden;
}
th, td {
  padding: 12px 15px;
  text-align: left;
}
th {
  background: #1d4d2d;
  color: #7fff7f;
}
td {
  border-bottom: 1px solid #1d4d2d;
}

/* ===== Badges ===== */
.badge {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
}
.badge-pending {
  background: #ffc107;
  color: #111;
}
.badge-complete {
  background: #28a745;
  color: #fff;
}
.badge-failed {
  background: #dc3545;
  color: #fff;
}

/* ===== Cards (Reusable) ===== */
.card {
  background: #1d4d2d;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  color: #fff;
}
.card:hover {
  background: #236038;
}
