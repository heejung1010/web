let listArray = [
    {
        pid:0,
        pName:"잠봉뵈르",
        pDesc:"수제 잠봉 햄과 프랑스산 버터로 완성한 클래식한 조화",
        pPrice: 7800,
        pThumbnail: "list-thumb-Jambon.jpg",
        plike:false,
        pDetailImg: "detail-Jambon.jpg",
        category:"sandwitch"
    },
    {
        pid:1,
        pName:"아보카도 에그",
        pDesc:"크리미한 아보카도와 반숙 에그가 어우러진 부드러운 식감",
        pPrice: 5500,
        pThumbnail: "list-thumb-egg.jpg",
        plike:false,
        pDetailImg:"detail-egg.jpg",
        category:"sandwitch"
    },
    {
        pid:2,
        pName:"치킨 페스토",
        pDesc:"허브 페스토와 촉촉한 치킨으로 산뜻하게 즐기는 풍미",
        pPrice: 6500,
        pThumbnail: "list-thumb-Chicken.jpg",
        plike:false,
        pDetailImg:"detail-Chicken.jpg",
        category:"sandwitch"
    },
    {
        pid:3,
        pName:"발사믹 머쉬룸 리코타",
        pDesc:"발사믹 머쉬룸과 리코타 치즈의 깊고 고소한 풍미",
        pPrice: 6500,
        pThumbnail: "list-thumb-Mushroom.jpg",
        plike:false,
        pDetailImg:"detail-Mushroom.jpg",
        category:"sandwitch"
    },
    {
        pid:4,
        pName:"브리 무화과 발사믹",
        pDesc:"브리 치즈와 무화과, 발사믹의 달콤한 조화",
        pPrice: 6900,
        pThumbnail: "list-thumb-Brie.jpg",
        plike:false,
        pDetailImg:"detail-Brie.jpg",
        category:"sandwitch"
    },
    {
        pid:5,
        pName:"레몬 로스트 치킨",
        pDesc:"레몬 크림 소스와 로스트 치킨의 상큼한 밸런스",
        pPrice: 6500,
        pThumbnail: "list-thumb-Lemon.jpg",
        plike:false,
        pDetailImg:"detail-Lemon.jpg",
        category:"sandwitch"
    },
    {
        pid:6,
        pName:"허니 리코타 애플",
        pDesc:"꿀과 리코타, 신선한 사과를 더한 산뜻한 밸런스",
        pPrice: 6900,
        pThumbnail: "list-thumb-Apple.jpg",
        plike:false,
        pDetailImg:"detail-Apple.jpg",
        category:"sandwitch"
    },
    {
        pid:7,
        pName:"쉬림프 갈릭 바질",
        pDesc:"갈릭버터 새우에 바질 향을 더한 깊은 맛",
        pPrice: 7800,
        pThumbnail: "list-thumb-Shrimp.jpg",
        plike:false,
        pDetailImg:"detail-Shrimp.jpg",
        category:"sandwitch"
    },
    {
        pid:8,
        pName:"연어 딜 크림치즈",
        pDesc:"훈제연어와 딜 크림치즈의 상큼한 레이어",
        pPrice: 7800,
        pThumbnail: "list-thumb-Salmon.jpg",
        plike:false,
        pDetailImg:"detail-Salmon.jpg",
        category:"sandwitch"
    },
    {
        pid:9,
        pName:"리얼 비프 샌드",
        pDesc:"풍성한 비프에 치즈를 더한 진한 만족감",
        pPrice: 8500,
        pThumbnail: "list-thumb-Beef.jpg",
        plike:false,
        pDetailImg:"detail-Beff.jpg",
        category:"sandwitch"
    },
    {
        pid:10,
        pName:"내슈빌 치킨",
        pDesc:"바삭한 치킨에 매콤한 소스를 더한 강렬한 맛",
        pPrice: 8500,
        pThumbnail: "list-thumb-Nashville.jpg",
        plike:false,
        pDetailImg:"detail-Nashville.jpg",
        category:"sandwitch"
    },
    {
        pid:11,
        pName:"크리미 에그 포테이토",
        pDesc:"부드러운 에그와 감자가 어우러진 든든한 구성",
        pPrice: 5500,
        pThumbnail: "list-thumb-Potato.jpg",
        plike:false,
        pDetailImg:"detail-Potato.jpg",
        category:"sandwitch"
    },
    {
        pid:12,
        pName:"치아바타",
        pDesc:"천천히 발효되어 쫄깃함이 살아있는 담백한 풍미",
        pPrice: 3500,
        pThumbnail: "list-bread1.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:13,
        pName:"치아바타 올리브",
        pDesc:"짭조름한 올리브가 어우러진 깊고 입체적인 맛",
        pPrice: 4000,
        pThumbnail: "list-bread2.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:14,
        pName:"치아바타 무화과",
        pDesc:"무화과의 은은한 단맛이 퍼지는 부드러운 조화",
        pPrice: 4000,
        pThumbnail: "list-bread3.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:15,
        pName:"포카치아",
        pDesc:"올리브오일 향과 허브가 어우러진 촉촉한 매력",
        pPrice: 4500,
        pThumbnail: "list-bread4.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:16,
        pName:"깜빠뉴",
        pDesc:"자연 발효의 깊이가 느껴지는 고소하고 묵직한 풍미",
        pPrice: 3500,
        pThumbnail: "list-bread5.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:17,
        pName:"천연발효종 식빵",
        pDesc:"결이 부드럽게 풀어지는 포근한 텍스처",
        pPrice: 5000,
        pThumbnail: "list-bread5.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:18,
        pName:"통밀 식빵",
        pDesc:"통밀의 고소함과 담백함이 균형 잡힌 깊은 맛",
        pPrice: 5500,
        pThumbnail: "list-bread6.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:19,
        pName:"바게트",
        pDesc:"바삭한 크러스트와 살아있는 기공의 정통 식감",
        pPrice: 3800,
        pThumbnail: "list-bread6.jpg",
        plike:false,
        category:"bread"
    },
    {
        pid:20,
        pName:"마들렌",
        pDesc:"천연발효종으로 더 편안하게 즐기는 촉촉한 케이크",
        pPrice: 2800,
        pThumbnail: "list-pastries1.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:21,
        pName:"휘낭시에",
        pDesc:"깊고 진한 풍미가 살아있는 프리미엄 발효 디저트",
        pPrice: 2800,
        pThumbnail: "list-pastries2.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:22,
        pName:"스콘",
        pDesc:"담백함 속에 은은한 고소함을 담은 클래식 베이크",
        pPrice: 3000,
        pThumbnail: "list-pastries3.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:23,
        pName:"까눌레",
        pDesc:"바삭함과 쫀득함이 공존하는 정통 프렌치 디저트",
        pPrice: 3300,
        pThumbnail: "list-pastries4.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:24,
        pName:"쿠키",
        pDesc:"순수한 풍미를 담은 프리미엄 수제 쿠키",
        pPrice: 5000,
        pThumbnail: "list-pastries5.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:25,
        pName:"버터 샌드 쿠키",
        pDesc:"부드러운 크림과 쿠키가 어우러진 프리미엄 샌드 디저트",
        pPrice: 3800,
        pThumbnail: "list-pastries6.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:26,
        pName:"다쿠아즈",
        pDesc:"가볍고 섬세한 머랭과 크림의 균형 잡힌 디저트",
        pPrice: 3500,
        pThumbnail: "list-pastries7.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:27,
        pName:"파운드 케이크",
        pDesc:"깊고 묵직한 풍미의 클래식 발효 케이크",
        pPrice: 3800,
        pThumbnail: "list-pastries8.jpg",
        plike:false,
        category:"pastries"
    },
    {
        pid:28,
        pName:"아메리카노",
        pDesc:"깔끔하고 깊은 풍미의 블랙 커피",
        pPrice: 2000,
        pThumbnail: "list-drink1.jpg",
        plike:false,
        category:"drink"
    },
    {
        pid:29,
        pName:"라떼",
        pDesc:"부드러운 우유와 에스프레소의 균형",
        pPrice: 2500,
        pThumbnail: "list-drink2.jpg",
        plike:false,
        category:"drink"
    },
    {
        pid:30,
        pName:"바닐라 라떼",
        pDesc:"바닐라빈이 들어간 부드러운 라떼",
        pPrice: 2800,
        pThumbnail: "list-drink3.jpg",
        plike:false,
        category:"drink"
    },
    {
        pid:31,
        pName:"카라멜 마끼아또",
        pDesc:"달콤한 카라멜과 부드러운 밀크 커피",
        pPrice: 2800,
        pThumbnail: "list-drink4.jpg",
        plike:false,
        category:"drink"
    },
    {
        pid:32,
        pName:"초코 라떼",
        pDesc:"진한 초콜릿 풍미의 부드러운 라떼",
        pPrice: 2500,
        pThumbnail: "list-drink5.jpg",
        plike:false,
        category:"drink"
    },
    {
        pid:33,
        pName:"오렌지 주스",
        pDesc:"100% 오렌지 착즙 주스",
        pPrice: 3000,
        pThumbnail: "list-drink6.jpg",
        plike:false,
        category:"drink"
    }
    


]