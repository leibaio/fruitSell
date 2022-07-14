// 通用请求路径basePath
var basePath = 'http://127.0.0.1:8089/'

// 发送GET请求
function GET(url, data = {}){
  return new Promise((resolve, reject) => {
    wx.request({
      url: basePath + url,
      data: data,
      header: { 'content-type': 'application/json', 'token': 'cpipeyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjcGlwIiwiaWQiOjEsIm5hbWUiOiJzcGVlbjEyMyIsInBob25lIjoiMTM5MTQyNTMwODAiLCJpYXQiOjE2NTAxMjQ5ODYsImV4cCI6MTY1MDcyOTc4Nn0.5VMaNRy8UCNt4w6GxUYZZU39_FnRNWZyD25WWs9yIr8' },
      method: 'GET',
      success: (res) => { console.log(res); resolve(res) },
      fail: (err) => { console.log(err); reject(err) }
    })
  })
}

// 发送POST请求
function POST(url, data = {}){
  return new Promise((resolve, reject) => {
    wx.request({
      url: basePath + url,
      data: data,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: (res) => { console.log(res); resolve(res) },
      fail: (err) => { console.log(err); reject(err) }
    })
  })
}

// 发送PUT请求
function PUT(url, data = {}){
  return new Promise((resolve, reject) => {
    wx.request({
      url: basePath + url,
      data: data,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'PUT',
      success: (res) => { console.log(res); resolve(res) },
      fail: (err) => { console.log(err); reject(err) }
    })
  })
}

// 发送DELETE请求
function DELETE(url, data = {}){
  return new Promise((resolve, reject) => {
    wx.request({
      url: basePath + url,
      data: data,
      header: { 'content-type': 'application/json' },
      method: 'DELETE',
      success: (res) => { console.log(res); resolve(res) },
      fail: (err) => { console.log(err); reject(err) }
    })
  })
}

module.exports = {
  GET, POST, PUT, DELETE
}
