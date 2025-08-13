// src/Counter.jsx
import React, { useState, useEffect } from 'react'; // import useEffect

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect จะทำงานหลังจากที่ component render เสร็จสิ้น
  useEffect(() => {
    // นี่คือ side effect ที่เราต้องการทำ
    console.log('Effect ทำงาน!');
    document.title = `คุณกดไปแล้ว ${count} ครั้ง`;

    // Dependency Array [count] หมายความว่า
    // effect นี้จะทำงานใหม่ "ก็ต่อเมื่อ" ค่า count เปลี่ยนแปลงเท่านั้น
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  }

return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>ตัวนับเลข (พร้อม Effect)</h3>
      <p>คุณกดไปแล้ว: {count} ครั้ง</p>
      <button onClick={handleIncrement}>
        เพิ่มค่า +
      </button><button onClick={handleDecrement}>
ลดค่า      </button>
    </div>
  );
}


export default Counter;