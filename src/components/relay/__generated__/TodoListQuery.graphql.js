/**
 * @flow
 * @relayHash b59f90d03503e040100677dc562284ea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoListQueryVariables = {||};
export type TodoListQueryResponse = {|
  +todos: $ReadOnlyArray<?{|
    +key: string,
    +title: string,
    +completed: boolean,
  |}>
|};
*/


/*
query TodoListQuery {
  todos {
    key: id
    title
    completed
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": "key",
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "completed",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TodoListQuery",
  "id": null,
  "text": "query TodoListQuery {\n  todos {\n    key: id\n    title\n    completed\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec2564a3b872d54e7675b8f7783954f8';
module.exports = node;
