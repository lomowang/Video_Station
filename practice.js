
// 擷取各元素
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


// 新增監聽事件click 
                                                    // 增加展開
open.addEventListener('click',() => container.classList.add('show-nav'))

                                                    // 增加移除
close.addEventListener('click',() => container.classList.remove('show-nav'))



