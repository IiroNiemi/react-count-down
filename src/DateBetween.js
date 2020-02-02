const DateBetween = (startDate, endDate) => {

	let second = 0;

	if(endDate > startDate){
		second = -1000
	} else{
		second = 1000
	}
	
  let minute = second * 60
  let hour = minute * 60
  let day = hour * 24
  let distance = endDate - startDate

  if (distance < 0) {
    // return false
	}
	
	console.log(distance);

  let days = Math.floor(distance / day)
  let hours = Math.floor((distance % day) / hour)
  let minutes = Math.floor((distance % hour) / minute)
  let seconds = Math.floor((distance % minute) / second)

  let between = []

  days > 0 ? between.push(`${days} päivää`) : false
  hours > 0 ? between.push(`${hours} tuntia`) : false
  minutes > 0
    ? between.push(`${minutes} minuuttia`)
    : false
  seconds > 0
    ? between.push(`${seconds} sekuntia`)
    : false

  return between.join(' ')
}

module.exports = DateBetween
