import React from "react";
import BuildHold from "./Components/HealthWork/BuildHold";

const App = () => {
	return (
		<div>
			<BuildHold />
		</div>
	);
};

export default App;

// import React from "react";
// import { GlobalButton } from "./Components/GlobalButton";
// import HomeScreen from "./Components/HomeScreen";
// const App = () => {
// 	const date = new Date("2022, 12, 8");
// 	const course = "React";
// 	const price = 50.0;

// 	return (
// 		<div>
// 			<HomeScreen
// 				date={new Date("2022, 12, 8")}
// 				course='React js'
// 				price='$30.0'></HomeScreen>
// 			<HomeScreen
// 				date={new Date("2021, 11, 12")}
// 				course={course}
// 				price={price}
// 			/>
// 			<HomeScreen date={new Date("1989, 6, 14")} course='python' price='$70' />
// 			<HomeScreen date={new Date("1989, 6, 14")} course='python' price='$70' />
// 		</div>
// 	);
// };

// export default App;
