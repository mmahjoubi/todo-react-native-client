/**
 * @flow
 * @relayHash b9443eb0804f8708fad25aaf825702f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTodoInput = {
  clientMutationId?: ?string,
  title: string,
  description: string,
};
export type AddTodoItemFormMutationVariables = {|
  input: CreateTodoInput
|};
export type AddTodoItemFormMutationResponse = {|
  +createTodo: ?{|
    +createdTodo: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation AddTodoItemFormMutation(
  $input: CreateTodoInput!
) {
  createTodo(input: $input) {
    createdTodo {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateTodoInput!"
      }
    ],
    "concreteType": "CreateTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createdTodo",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": false,
        "selections": [
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddTodoItemFormMutation",
  "id": null,
  "text": "mutation AddTodoItemFormMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    createdTodo {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddTodoItemFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddTodoItemFormMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63f6046194c56353c157e587788a60d1';
module.exports = node;
