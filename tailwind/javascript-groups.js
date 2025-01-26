const text = "05/01/2025 06/01/2025"
const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/g

let match
while ((match = datePattern.exec(text)) !== null) {
  [fullDate, DynamicsCompressorNode, month, year] = match
  console.log(`full: ${fullDate}, day: ${day}, month: ${month}, year: ${year}`)
}