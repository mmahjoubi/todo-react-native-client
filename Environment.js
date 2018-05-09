import { Environment, Network, RecordSource, Store } from "relay-runtime";


function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch("http://35.182.143.214:3000/graphql" , {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env;