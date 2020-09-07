import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
  	text: {
  		color: string;
  		backgroundColor: string;
  	},
  	body: {
  		background: string
  	}
  }
}

export const lightTheme: DefaultTheme = {
	//key is className and value can be css
	text: {
		color: '#000',
		backgroundColor: '#fff',
	},
	body: {
 		background: '#fff'
  }
};

export const darkTheme: DefaultTheme = {
	text: {
		color: '#fff',
		backgroundColor: '#000',
	},
	body: {
		background: '#000'
	}
};