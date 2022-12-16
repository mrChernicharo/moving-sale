const monitorLink =
	"https://www.amazon.com/Dell-C3422WE-Curved-Screen-Monitor/dp/B08ZJP88D2/ref=asc_df_B08ZJP88D2/?tag=hyprod-20&linkCode=df0&hvadid=507731305156&hvpos=&hvnetw=g&hvrand=12146915242419025841&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014895&hvtargid=pla-1238742782815&psc=1";

const products = [
	{
		name: "Wide Monitor",
		price: 190,
		sold: true,
		photos: ["monitor_1.jpeg", "monitor_0.png", "monitor_2.jpeg", "monitor_3.jpeg"],
		description:
			"This is a 34.1' huuuuge HD monitor! State-of-art slightly curved screen. Built-in camera on the top. Only 5 months of usage (My company gave it to me).",
	},
	{
		name: "Convertible Sofa",
		price: 30,
		sold: true,
		photos: [
			"convertible_sofa_2.jpeg",
			"convertible_sofa_1.jpg",
			"convertible_sofa_3.jpg",
			"convertible_sofa_4.jpeg",
		],
	},
	{
		name: "Bed",
		price: 50,
		sold: true,
		photos: ["bed.jpg"],
	},
	{
		name: "Drawer cabinet",
		price: 10,
		sold: true,
		photos: ["drawer_cabinet.jpeg"],
	},
	{
		name: "Iron + Ironing Board + Door Hanger",
		price: 15,
		sold: true,
		photos: ["iron_2.jpeg", "iron.jpg"],
	},
	{
		name: "Red bike",
		price: 120,
		sold: true,
		photos: ["bike_red_1.jpg", "bike_red_2.jpg"],
	},
	{
		name: "Work Station (Chair)",
		price: 10,
		sold: true,
		photos: ["work_station_1.jpeg", "work_station_2.jpeg"],
	},
	{
		name: "Fruit bowl",
		price: 3,
		sold: true,
		photos: ["fruit_bowl.jpg"],
	},
	{
		name: "Mirror",
		price: 10,
		sold: true,
		photos: ["mirror.jpeg", "mirror_2.jpeg"],
	},
	{
		name: "TV/PC rack",
		price: 0,
		sold: true,
		photos: ["pc_rack.jpg"],
	},
	{
		name: "Lamp",
		price: 10,
		sold: true,
		photos: ["black_lamp.jpeg", "black_lamp_2.jpeg"],
	},
	{
		name: "Office organizer",
		price: 2,
		sold: true,
		photos: ["dime_organizer.jpeg"],
		description: "Coins included!",
	},
	{
		name: "Cute Flasks",
		price: 2,
		sold: true,
		photos: ["bathroom_recipients.jpeg"],
	},
	{
		name: "Kitten Mugs",
		price: "2 pair",
		sold: true,
		photos: ["kitten_mugs.jpeg"],
	},
	{
		name: "Wood Hangers (15 count)",
		price: "1 each",
		sold: true,
		photos: ["hangers_1.jpg"],
	},
	{
		name: "Hangers (8 count)",
		price: "3 bundle",
		sold: true,
		photos: ["hangers_3.jpg", "hangers_2.jpg"],
	},
	{
		name: "Juice/Water jar",
		description: "High quality glass bottle",
		price: 5,
		sold: true,
		photos: ["water_jar.jpg", "water_jar_2.jpeg"],
	},
	{
		name: "Silverware",
		price: 3,
		sold: true,
		photos: ["silverware.jpg"],
	},
	{
		name: "Thermic bottles",
		price: "1 each",
		sold: true,
		photos: ["thermic_bottles.jpg"],
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

	if (prod.description && !prod.sold) {
		const desc = document.createElement("small");
		desc.textContent = prod.description;
		li.append(desc);
	}

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
