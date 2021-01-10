// console.log('我是main.js 2')
let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(element => {
                const li = document.createElement('li')
                li.textContent = element.id
                xxx.appendChild(li)    
            });
            n +=1
            }
        }
    request.send()
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            // 把符合JSON语法的字符串变成对应的对象或者其他东西   
            const object = JSON.parse(request.response)
            console.log(typeof object);
            console.log(object);
            myname.textContent = object.name
            }
        }
    request.send()
}

getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () => {
        // console.log(request.readyState); //2 3 4
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim());
            }
        }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload =()=>{
        // console.log(request.response);
        const div  = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = ()=>{}
    request.send()
}

getCSS.onclick = () => {
    // 1、创建HttpRequest对象
    const request = new XMLHttpRequest()
    // 2、调用对象的open方法
    request.open('GET','/style.css')  //readyState = 1
    //3、监听对象的onload和onerror事件
    request.onreadystatechange = () => {
        console.log(request.readyState); //2 3 4
        if(request.readyState === 4){
            console.log('下载完成');
            console.log(request.status); //200
            //下载完成  但是不知道是成功 2xx  还是失败  4xx  5xx
            if(request.status >= 200 && request.status < 300){
                const style  = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('加载CSS失败')
            }
        }
        // console.log('request.response');
        // console.log(request.response);
    }
    request.send()  //readyState = 2
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = () => {
        // console.log('request.response响应的内容是文件2.js的所有内容');
        // console.log(request.response);
        //创建script标签
        const script = window.document.createElement('script')
        // 填写script内容
        script.innerHTML = request.response
        // 插到头里面
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

