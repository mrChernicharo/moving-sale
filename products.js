const monitorLink =
	"https://www.amazon.com/Dell-C3422WE-Curved-Screen-Monitor/dp/B08ZJP88D2/ref=asc_df_B08ZJP88D2/?tag=hyprod-20&linkCode=df0&hvadid=507731305156&hvpos=&hvnetw=g&hvrand=12146915242419025841&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014895&hvtargid=pla-1238742782815&psc=1";

const products = [
	{
		name: "Wide Monitor",
		price: 200,
		sold: false,
		photos: ["monitor_1.jpeg", "monitor_0.png", "monitor_2.jpeg", "monitor_3.jpeg"],
	},
	{
		name: "Convertible Sofa",
		price: 40,
		sold: false,
		photos: ["convertible_sofa_1.jpg", "convertible_sofa_3.jpg"],
	},
	{
		name: "Bed",
		price: 50,
		sold: false,
		photos: ["bed.jpg"],
	},
	{
		name: "Drawer cabinet",
		price: 10,
		sold: false,
		photos: ["drawer_cabinet.jpeg"],
	},
	{
		name: "Red bike",
		price: 130,
		sold: false,
		photos: ["bike_red_1.jpg", "bike_red_2.jpg"],
	},
	{
		name: "Fruit bowl",
		price: 3,
		sold: false,
		photos: ["fruit_bowl.jpg"],
	},
	{
		name: "Wood Hangers (15 count)",
		price: 10,
		sold: false,
		photos: ["hangers_1.jpg"],
	},
	{
		name: "Hangers (8 count)",
		price: 10,
		sold: false,
		photos: ["hangers_3.jpg", "hangers_2.jpg"],
	},
	{
		name: "TV/PC rack",
		price: 0,
		sold: false,
		photos: ["pc_rack.jpg"],
	},

	{
		name: "Silverware",
		price: 5,
		sold: false,
		photos: ["silverware.jpg"],
	},

	{
		name: "Thermic bottles",
		price: "1 each",
		sold: false,
		photos: ["thermic_bottles.jpg"],
	},
	{
		name: "Juice/Water jar",
		description: "High quality glass bottle",
		price: 5,
		sold: false,
		photos: ["water_jar.jpg"],
	},
];
// .sort((a, b) => (a.sold ? 1 : 0) - (b.sold ? 1 : 0));

console.log(products);

const list = document.querySelector("#list");

products.forEach(prod => {
	const li = document.createElement("li");

	const titleDiv = document.createElement("div");
	titleDiv.classList.add("title-div");
	const title = document.createElement("p");
	title.textContent = prod.name;

	titleDiv.append(title);

	if (prod.sold) {
		const span = document.createElement("span");
		span.textContent = "(SOLD ✅)";
		titleDiv.append(span);
		title.classList.add("sold");
	}
	li.append(titleDiv);

	const price = document.createElement("p");
	price.textContent = `$${parseInt(prod.price) > 0 ? prod.price : "FREE!"}`;
	li.append(price);

	const imgWrapper = document.createElement("div");

	prod.photos.forEach((photo, i) => {
		const img = document.createElement("img");
		img.src = `images/${photo}`;
		imgWrapper.append(img);
		imgWrapper.classList.add("img-wrapper");

		if (i === 1) {
			imgWrapper.classList.add("grid-container");
		}
	});

	li.append(imgWrapper);
	list.append(li);
});
