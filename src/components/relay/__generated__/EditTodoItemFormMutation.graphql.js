/**
 * @flow
 * @relayHash 4493badc6ac4d0fb87a6d82ccbfcba30
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditTodoInput = {
  clientMutationId?: ?string,
  todoId: string,
  title?: ?string,
  description?: ?string,
  completed?: ?boolean,
};
export type EditTodoItemFormMutationVariables = {|
  input: EditTodoInput
|};
export type EditTodoItemFormMutationResponse = {|
  +editTodo: ?{|
    +editedTodo: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation EditTodoItemFormMutation(
  $input: EditTodoInput!
) {
  editTodo(input: $input) {
    editedTodo {
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
    "type": "EditTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "editTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "EditTodoInput!"
      }
    ],
    "concreteType": "EditTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editedTodo",
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
  "name": "EditTodoItemFormMutation",
  "id": null,
  "text": "mutation EditTodoItemFormMutation(\n  $input: EditTodoInput!\n) {\n  editTodo(input: $input) {\n    editedTodo {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditTodoItemFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "EditTodoItemFormMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71973750e0b996a456c8a7f0e723524e';
module.exports = node;
