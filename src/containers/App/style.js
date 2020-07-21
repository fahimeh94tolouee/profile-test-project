import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
      direction:rtl;
      //min-width: 992px;
    }
    body {
      margin: 0;
      direction: rtl;
      text-align: right;
      font-family: Number, sans-serif;
      //min-width: 992px;
      overflow-y: auto;
    }
    
    * {
    	box-sizing: border-box;
    	scrollbar-color: #9E9E9E #DDDDDD;
	    scrollbar-width: thin;
		outline: none !important;
    }
    /* width */
		*::-webkit-scrollbar {
			width: 8px;
			height: 8px;
			background: #DDDDDD;
			border-radius: 4px;
		}
		/* Track */
		*::-webkit-scrollbar-track {
			border-radius: 4px;
		}
		/* Handle */
		*::-webkit-scrollbar-thumb {
			background: #9E9E9E;
			border-radius: 4px;
		}
		/* Handle on hover */
		*::-webkit-scrollbar-thumb:hover {
			background: #9E9E9E;
		}
`;