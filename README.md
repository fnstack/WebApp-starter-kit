# WebApp-starter-kit
This repository is a starter kit for web application using **react**, **typescript**, **graphQL**, **react-apollo** and **webpack 4**, **oidc-client**.
## How to use
1.	Install `node` and `yarn`
2.	Clone this repository
3.	In the cloned directory run the command `yarn`
4.	Run the app with `yarn start`

## Set Identity server
1. Update the file [src\config.ts](src\config.ts) by setting the `authority`, `client id` and `redirect URI` of your identity server. If you want more configuration of your user manager, you can put that on  [src\identity\userManager.ts](src\identity\userManager.ts).
2. Un comment commented line below line 61 form [src/layout/components/header.tsx](src/layout/components/header.tsx) to enable security on routing.
