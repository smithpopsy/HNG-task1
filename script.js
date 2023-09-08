const date = new Date()

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const now = days[date.getDay()-1]



const updateTime = () => {
  const date = new Date()
  timeUtc.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds()
}

const nowTag = document.getElementById('now')
const timeUtc = document.getElementById('utc')

nowTag.textContent=now

setInterval(updateTime,1)