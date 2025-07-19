
import { useState } from "react";

const initialRecipes = [
  { id: 1, cn: "糖醋排骨", en: "Sweet and Sour Pork Ribs", image: "" },
  { id: 2, cn: "红烧排骨", en: "Braised Pork Ribs", image: "" },
  { id: 3, cn: "玉米排骨汤", en: "Pork Rib and Corn Soup", image: "" },
  { id: 4, cn: "青椒肉丝", en: "Stir-fried Pork with Green Pepper", image: "" },
  { id: 5, cn: "红烧肉", en: "Braised Pork Belly", image: "" },
  { id: 6, cn: "青蒜炒肉丝", en: "Stir-fried Shredded Pork with Green Garlic", image: "" },
  { id: 7, cn: "老妈蹄花", en: "Chengdu Pork Trotter Soup", image: "" },
  { id: 8, cn: "黄焖鸡", en: "Braised Chicken in Brown Sauce", image: "" },
  { id: 9, cn: "菌菇鸡汤", en: "Chicken and Mushroom Soup", image: "" },
  { id: 10, cn: "香煎鸡胸肉", en: "Pan-fried Chicken Breast", image: "" },
  { id: 11, cn: "凉拌鸡胗", en: "Cold Dressed Chicken Gizzards", image: "" },
  { id: 12, cn: "窑鸡", en: "Clay-baked Chicken", image: "" },
  { id: 13, cn: "香煎里脊肉串", en: "Pan-fried Pork Tenderloin Skewers", image: "" },
  { id: 14, cn: "韭菜炒鸡蛋", en: "Scrambled Eggs with Chinese Chives", image: "" },
  { id: 15, cn: "柠檬干煎鸡", en: "Lemon Pan-fried Chicken", image: "" },
  { id: 16, cn: "孜然牛肉粒", en: "Cumin Beef Cubes", image: "" },
  { id: 17, cn: "砂锅牛蹄筋", en: "Clay Pot Beef Tendons", image: "" },
  { id: 18, cn: "盐池滩羊肉", en: "Yanchi Lake Lamb", image: "" },
  { id: 19, cn: "满洲烤鱼", en: "Manchurian Grilled Fish", image: "" },
  { id: 20, cn: "辣奶油炖鸡", en: "Spicy Cream Braised Chicken", image: "" },
  { id: 21, cn: "焖豆腐", en: "Braised Tofu", image: "" },
  { id: 22, cn: "羊蝎子煲", en: "Lamb Spine Hotpot", image: "" },
  { id: 23, cn: "芹菜虾仁", en: "Stir-fried Celery with Shrimp", image: "" },
  { id: 24, cn: "卤味拼盘", en: "Braised Platter (Chicken Feet, Duck Feet, Goose Feet, Beef Shank, Duck Neck, Duck Head, Tea Eggs)", image: "" },
  { id: 25, cn: "油炸花生米", en: "Crispy Fried Peanuts", image: "" },
];

export default function RecipeApp() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [fileInputs, setFileInputs] = useState({});

  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setRecipes((prev) =>
          prev.map((r) => (r.id === id ? { ...r, image: event.target.result } : r))
        );
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🍽️ 我的个人菜谱</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-xl shadow">
            <div className="font-semibold text-lg mb-1">{recipe.cn}</div>
            <div className="text-gray-500 text-sm mb-2">{recipe.en}</div>
            {recipe.image ? (
              <img src={recipe.image} alt="菜图" className="rounded w-full h-48 object-cover" />
            ) : (
              <label className="block border border-dashed border-gray-300 rounded h-48 flex items-center justify-center cursor-pointer">
                上传图片
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, recipe.id)}
                  className="hidden"
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
