import { R2Explorer } from "r2-explorer";

// Read all available configurations here: https://r2explorer.com/getting-started/configuration/
export default R2Explorer({
	readonly: false,
	cfAccessTeamName: 'your-team-name' // set this to your actual team name
	// basicAuth: {
	//   username: 'username',
	//   password: 'password'
	// }
});
