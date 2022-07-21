const meigen_items = [
    "今のままではいけないと思います。だからこそ、日本は今のままではいけないと思っている。​",
    "おぼろげながら浮かんできたんです。46という数字が。",
    "気候変動のような大きな問題は楽しく、クールでセクシーに取り組むべきです。"
];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");


btn.addEventListener("click", () => {
    var num = Math.floor(Math.random() * meigen_items.length);
    disp.innerHTML = meigen_items[num];
});