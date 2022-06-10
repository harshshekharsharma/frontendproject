function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
  
  // 👇️ Current Month
  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  console.log(daysInCurrentMonth);