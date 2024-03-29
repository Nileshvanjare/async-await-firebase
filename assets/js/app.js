cl = console.log;

const form = document.getElementById("form")

const info = document.getElementById("info")

const baseUrl = `https://post-crud-1-default-rtdb.asia-southeast1.firebasedatabase.app`
const postUrl = `${baseUrl}/posts.json`

const makeApi = async (methodName,Apiurl,msgBody)=>{
    let dataBody = msgBody ? JSON.stringify(msgBody) : null;

  try{
    let res = await fetch(Apiurl,{
        method : methodName,
        body : dataBody
    })
     res.json()

  }catch(cl){

  }
}


const insertCard = (obj) =>{
    
    let card = document.createElement("div")
    // card.className = 'card mb-4'
    card.id = obj.id;
    card.innerHTML = `
    <div class="card">
        <div class="card-header">${obj.title}</div>
        <div class="card-body">${obj.content}</div>
        <div class="card-footer d-felx justify-content-between">
            <button class="btn btn-outline-primary">Edit</button>
            <button class="btn btn-outline-danger">Delet</button>
        </div>
    </div>`
    info.prepend(card)
}


const onform = async (eve) =>{
    eve.preventDefault()

    try{
        let newpost = {
            title : title.value,
            content :content.value,
            userid : userid.value
        }
        // cl(newpost)
        let data = await makeApi("POST",postUrl,newpost)
        newpost.id = data.name

        insertCard(newpost)



    }
    catch (err){
        cl(err)
    }
    finally{
        //
    }
}

const fetchPost = async()=>{
    try{let data = await makeApi("GET",postUrl)

    let postArr = []

    let post = data[key]
     post.id = key  //post = {...data[key].id : key}
     postArr.push(post)
     cl(postArr)

    }
    catch(err){
        cl(err)    
    }

}

fetchPost()



form.addEventListener("submit",onform)



// const form = document.getElementById("form")
// const info = document.getElementById("info")
// const baseurl = `https://post-crud-1-default-rtdb.asia-southeast1.firebasedatabase.app`
// const posturl = `${baseurl}/posts.json`
// const makeApi  =async (methodname,urlname,msgbody)=>{
//     let msgdata = msgbody ? JSON.stringify(msgbody) : null
//     let res = await fetch(urlname,{
//         method : methodname,
//         body : msgdata
//     })
//     res.json
// }

// const  templating = (arr) =>{
//     info.innerHTML = arr.map(ele=>{
//         return `<div class="card">
//         <div class="card-header">${ele.title}</div>
//         <div class="card-body">${ele.content}</div>
//         <div class="card-footer d-felx justify-content-between">
//             <button class="btn btn-outline-primary">Edit</button>
//             <button class="btn btn-outline-danger">Delet</button>
//         </div>
//     </div>`
//     })
// }

// const fetchpost = async()=>{
//    try{
//     let data = await makeApi("GET",posturl)
//     postArr = []

//     let post = data[key]
//     post.id = key
//     postArr.push(post)
//     cl(postArr)
//     templating(postArr)
//    }catch(err){
//     cl(err)
//    }


// }
// fetchpost()


// const createcard = (obj)=>{
//     let card = document.createElement("div")
//     card.id = obj.id
//     card.innerHTML = `<div class="card">
//             <div class="card-header">${obj.title}</div>
//             <div class="card-body">${obj.content}</div>
//             <div class="card-footer d-felx justify-content-between">
//                 <button class="btn btn-outline-primary">Edit</button>
//                 <button class="btn btn-outline-danger">Delet</button>
//             </div>
//         </div>`

//         info.prepend(card)

// }

// const onform = async(eve)=>{
//     eve.preventDefault()
//    try{
//     let newpost = {
//         title :title.value,
//         content : content.value,
//         userid : userid.value
//      }
//  let res = await makeApi("POST",posturl,newpost)
//  newpost.id = res.id
//       createcard(res)

//    }catch(err){
//        cl(err)
//    }
// }

// form.addEventListener("submit",onform)