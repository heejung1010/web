document.addEventListener("DOMContentLoaded",()=>{

    // 현재 상품의 카테고리 가져오기
    let productId = getParam("pid")
    const currentProduct = listArray.find(item=>item.pid == productId)
    const currentCategory = currentProduct?.category || "sandwitch"

    // 같은 카테고리의 상품만 필터링
    const filteredArray = listArray.filter(item => item.category === currentCategory)

    // ul태그에 li태그의 형태로 상품 데이터를 넣는 소스코드
    const list = document.querySelector(".list-grid")
    let result = ""
    filteredArray.forEach(item=>{
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

})