// src/Counter.jsx
import React, { useState } from 'react'; // ต้อง import useState

function Counter() {
  // ประกาศ state ชื่อ count และฟังก์ชันสำหรับอัปเดตชื่อ setCount
  // 0 คือค่าเริ่มต้นของ count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>คุณกดไปแล้ว {count} ครั้ง</p>
    </div>
  );
}

export default Counter;