// mirage/nades.js
const nadesData = [
    // --- 警家烟 (两个不同的投掷点，落点相同) ---
    {
        id: "s1",
        type: "smoke",
        name: "A点警家烟 (从匪家)",
        startX: "40.00", startY: "85.00", // 起点：匪家
        endX: "45.50", endY: "32.20",     // 落点：警家售票亭
        throwType: "Jump Throw",
    },
    {
        id: "s2",
        type: "smoke",
        name: "A点警家烟 (从A二楼下)",
        startX: "35.00", startY: "65.00", // 起点：A二楼下
        endX: "45.50", endY: "32.20",     // 落点：警家售票亭 (坐标完全一样！)
        throwType: "Standing",
    },

    // --- 拱门烟 ---
    {
        id: "s3",
        type: "smoke",
        name: "拱门烟",
        startX: "42.00", startY: "78.00", 
        endX: "55.00", endY: "50.00",     
        throwType: "Jump Throw",
    },
    {
    id: "n-066312",
    type: "smoke",
    name: "das",
    startX: "35.00", startY: "65.00",
    endX: "45.50", endY: "32.20",
    throwType: "Standing"
},

    // --- B二楼火 ---
    {
        id: "m1",
        type: "molotov",
        name: "B",
        startX: "50.00", startY: "55.00",
        endX: "30.00", endY: "70.00",
        throwType: "Running",
    }
    
];