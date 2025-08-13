// src/App.jsx
import Welcome from './Welcome'; // Import Component ที่เราสร้าง

function App() {
  return (
    <div>
      <Welcome /> {/* เรียกใช้ Component ที่ import มา */}
      <h1>สวัสดี, React!</h1>
      <p>นี่คือ Component แรกของฉัน</p>
    </div>
  );
}

export default App;