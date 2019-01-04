interface Config {
  api: {
    uri: string;
    wsUri: string;
  };
  identity: {
    authority: string;
    clientId: string;
    redirectUri: string;
  };
}

export const config: Config = {
  api: {
    uri: 'https://fakerql.com/graphql',
    wsUri: `wss://fakerql.com/graphql`
  },
  identity: {
    authority: 'https://demo.identityserver.io',
    clientId: 'implicit.reference',
    redirectUri: 'https://notused'
  }
};
