export function calculatePercentage(hours: any, minutes: any) {
  const totalHours = 11; // Total hours (100%)
  const totalMinutes = totalHours * 60; // Convert total hours to minutes

  // Convert input hours to minutes and add minutes
  const totalValueMinutes = hours * 60 + minutes;

  // Calculate percentage
  return (totalValueMinutes / totalMinutes) * 100;
}

// Example usage:
const hours = 5; // Hours value
const minutes = 30; // Minutes value
const percentage = calculatePercentage(hours, minutes);
