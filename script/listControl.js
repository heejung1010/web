let pagyTitleOfListHtml = {
    sandwitch:{
        title:"Sandwiches",
        desc:"갓 구운 빵으로 만든 샌드위치"
    },
    bread:{
        title:"Bread",
        desc:"천천히 발효한 깊은 풍미의 빵"
    },
    pastries:{
        title:"Pastries",
        desc:"천연발효의 기다림으로 빚은 속 편한 순수 구움과자"
    },
    drink:{
        title:"Drinks",
        desc:"한 잔의 여유"
    }
}


document.addEventListener("DOMContentLoaded",()=>{

    let category = getParam("cate") || "sandwitch"
    
    if(category === "bread"){
        document.querySelector(".sub-banner").style.backgroundImage = "url(./img/bg-list2.jpg)";
    }
    if(category === "pastries"){
        document.querySelector(".sub-banner").style.backgroundImage = "url(./img/bg-list3.jpg)";
    }
    if(category === "drink"){
        document.querySelector(".sub-banner").style.backgroundImage = "url(./img/bg-list4.jpg)";
    }

    document.querySelector(".title").innerHTML = `
            <div class="common-frame">
                <h3>${pagyTitleOfListHtml[category].title}</h3>
                <p>${pagyTitleOfListHtml[category].desc}</p>
            </div>`

    // 서브 배너의 h1 텍스트를 카테고리에 맞게 변경
    document.querySelector(".sub-banner h1").innerHTML = `${pagyTitleOfListHtml[category].title} Menu`

    

    let findResult = []
    listArray.filter(item=>{
        if(item.category === category){
            findResult.push(item)
        }
    })

    

    // ul태그에 li태그의 형태로 상품 데이터를 넣는 소스코드
    const list = document.querySelector(".list-grid")
    let result = ""
    findResult.forEach(item=>{
        result += `
        <li>
            <a href="./detail.html?pid=${item.pid}">
                <figure>
                    <img src="./img/${item.pThumbnail}" alt="${item.pName}">
                </figure>
                <div class="list-option">
                    <span class="btn-heart">
                        <img src="./img/icn-heart.svg" alt="좋아요 아이콘">
                    </span>
                </div>
                <h4>${item.pName}</h4>
                <p class="fwm">${item.pDesc}</p>
                <div class="price fwb">${toWon(item.pPrice)}</div>
            </a>
        </li>`
    })
    list.innerHTML = result

    // 상품 개수를 데이터 갯수에 맞게 입력하는 코드
    document.querySelector("#current-count").innerHTML = findResult.length
    
    


    




})